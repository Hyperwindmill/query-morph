package org.morphql.jetbrains

import com.intellij.lexer.LexerBase
import com.intellij.psi.tree.IElementType
import java.util.regex.Pattern

class MorphQLLexer : LexerBase() {
    private var buffer: CharSequence = ""
    private var startOffset: Int = 0
    private var endOffset: Int = 0
    private var currentOffset: Int = 0
    private var tokenStart: Int = 0
    private var tokenEnd: Int = 0
    private var tokenType: IElementType? = null

    companion object {
        private val WHITESPACE = Pattern.compile("\\s+")
        private val COMMENT_LINE = Pattern.compile("//.*")
        private val COMMENT_BLOCK = Pattern.compile("/\\*[\\s\\S]*?\\*/")
        private val STRING_DOUBLE = Pattern.compile("\"([^\"\\\\]|\\\\.)*\"")
        private val STRING_SINGLE = Pattern.compile("'([^'\\\\]|\\\\.)*'")
        private val NUMBER = Pattern.compile("-?\\d+(\\.\\d+)?([eE][+-]?\\d+)?")
        private val IDENTIFIER = Pattern.compile("[a-zA-Z_$][\\w$]*")
        private val BACKTICK_IDENTIFIER = Pattern.compile("`([^`\\\\]|\\\\.)*`")
        
        // Brackets and punctuation
        private val BRACKETS = Pattern.compile("[{}()\\[\\]]")
    }

    override fun start(buffer: CharSequence, startOffset: Int, endOffset: Int, initialState: Int) {
        this.buffer = buffer
        this.startOffset = startOffset
        this.endOffset = endOffset
        this.currentOffset = startOffset
        advance()
    }

    override fun getState(): Int = 0

    override fun getTokenType(): IElementType? = tokenType

    override fun getTokenStart(): Int = tokenStart

    override fun getTokenEnd(): Int = tokenEnd

    override fun advance() {
        if (currentOffset >= endOffset) {
            tokenType = null
            return
        }

        tokenStart = currentOffset
        val remaining = buffer.subSequence(currentOffset, endOffset)

        // Whitespace
        val wsMatcher = WHITESPACE.matcher(remaining)
        if (wsMatcher.lookingAt()) {
            tokenType = com.intellij.psi.TokenType.WHITE_SPACE
            tokenEnd = currentOffset + wsMatcher.end()
            currentOffset = tokenEnd
            return
        }

        // Comments
        val lineCommentMatcher = COMMENT_LINE.matcher(remaining)
        if (lineCommentMatcher.lookingAt()) {
            tokenType = MorphQLTokenTypes.COMMENT
            tokenEnd = currentOffset + lineCommentMatcher.end()
            currentOffset = tokenEnd
            return
        }

        val blockCommentMatcher = COMMENT_BLOCK.matcher(remaining)
        if (blockCommentMatcher.lookingAt()) {
            tokenType = MorphQLTokenTypes.COMMENT
            tokenEnd = currentOffset + blockCommentMatcher.end()
            currentOffset = tokenEnd
            return
        }

        // Strings
        val dsMatcher = STRING_DOUBLE.matcher(remaining)
        if (dsMatcher.lookingAt()) {
            tokenType = MorphQLTokenTypes.STRING
            tokenEnd = currentOffset + dsMatcher.end()
            currentOffset = tokenEnd
            return
        }

        val ssMatcher = STRING_SINGLE.matcher(remaining)
        if (ssMatcher.lookingAt()) {
            tokenType = MorphQLTokenTypes.STRING
            tokenEnd = currentOffset + ssMatcher.end()
            currentOffset = tokenEnd
            return
        }

        // Backtick Identifier
        val btMatcher = BACKTICK_IDENTIFIER.matcher(remaining)
        if (btMatcher.lookingAt()) {
            tokenType = MorphQLTokenTypes.IDENTIFIER
            tokenEnd = currentOffset + btMatcher.end()
            currentOffset = tokenEnd
            return
        }

        // Numbers
        val numMatcher = NUMBER.matcher(remaining)
        if (numMatcher.lookingAt()) {
            tokenType = MorphQLTokenTypes.NUMBER
            tokenEnd = currentOffset + numMatcher.end()
            currentOffset = tokenEnd
            return
        }

        // Operators - need to check for multi-char first
        for (op in MorphQLConstants.OPERATORS.sortedByDescending { it.length }) {
            if (remaining.startsWith(op)) {
                tokenType = MorphQLTokenTypes.OPERATOR
                tokenEnd = currentOffset + op.length
                currentOffset = tokenEnd
                return
            }
        }

        // Brackets
        val brMatcher = BRACKETS.matcher(remaining)
        if (brMatcher.lookingAt()) {
            tokenType = MorphQLTokenTypes.BRACKETS
            tokenEnd = currentOffset + brMatcher.end()
            currentOffset = tokenEnd
            return
        }

        // Identifiers (including keywords and functions)
        val idMatcher = IDENTIFIER.matcher(remaining)
        if (idMatcher.lookingAt()) {
            val text = idMatcher.group()
            tokenType = when {
                MorphQLConstants.KEYWORDS.contains(text.lowercase()) -> MorphQLTokenTypes.KEYWORD
                MorphQLConstants.FUNCTIONS.contains(text.lowercase()) -> MorphQLTokenTypes.FUNCTION
                else -> MorphQLTokenTypes.IDENTIFIER
            }
            tokenEnd = currentOffset + idMatcher.end()
            currentOffset = tokenEnd
            return
        }

        // Char by char fallback
        tokenType = MorphQLTokenTypes.BAD_CHARACTER
        tokenEnd = currentOffset + 1
        currentOffset = tokenEnd
    }

    override fun getBufferSequence(): CharSequence = buffer

    override fun getBufferEnd(): Int = endOffset
}
