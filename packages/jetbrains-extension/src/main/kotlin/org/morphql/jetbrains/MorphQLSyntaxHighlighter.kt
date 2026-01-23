package org.morphql.jetbrains

import com.intellij.lexer.Lexer
import com.intellij.openapi.editor.DefaultLanguageHighlighterColors
import com.intellij.openapi.editor.colors.TextAttributesKey
import com.intellij.openapi.editor.colors.TextAttributesKey.createTextAttributesKey
import com.intellij.openapi.fileTypes.SyntaxHighlighterBase
import com.intellij.psi.tree.IElementType

class MorphQLSyntaxHighlighter : SyntaxHighlighterBase() {
    companion object {
        val KEYWORD = createTextAttributesKey("MORPHQL_KEYWORD", DefaultLanguageHighlighterColors.KEYWORD)
        val FUNCTION = createTextAttributesKey("MORPHQL_FUNCTION", DefaultLanguageHighlighterColors.FUNCTION_CALL)
        val OPERATOR = createTextAttributesKey("MORPHQL_OPERATOR", DefaultLanguageHighlighterColors.OPERATION_SIGN)
        val STRING = createTextAttributesKey("MORPHQL_STRING", DefaultLanguageHighlighterColors.STRING)
        val NUMBER = createTextAttributesKey("MORPHQL_NUMBER", DefaultLanguageHighlighterColors.NUMBER)
        val COMMENT = createTextAttributesKey("MORPHQL_COMMENT", DefaultLanguageHighlighterColors.LINE_COMMENT)
        val BRACKETS = createTextAttributesKey("MORPHQL_BRACKETS", DefaultLanguageHighlighterColors.BRACKETS)

        private val KEYWORD_KEYS = arrayOf(KEYWORD)
        private val FUNCTION_KEYS = arrayOf(FUNCTION)
        private val OPERATOR_KEYS = arrayOf(OPERATOR)
        private val STRING_KEYS = arrayOf(STRING)
        private val NUMBER_KEYS = arrayOf(NUMBER)
        private val COMMENT_KEYS = arrayOf(COMMENT)
        private val BRACKETS_KEYS = arrayOf(BRACKETS)
        private val EMPTY_KEYS = emptyArray<TextAttributesKey>()
    }

    override fun getHighlightingLexer(): Lexer {
        return MorphQLLexer()
    }

    override fun getTokenHighlights(tokenType: IElementType): Array<TextAttributesKey> {
        return when (tokenType) {
            MorphQLTokenTypes.KEYWORD -> KEYWORD_KEYS
            MorphQLTokenTypes.FUNCTION -> FUNCTION_KEYS
            MorphQLTokenTypes.OPERATOR -> OPERATOR_KEYS
            MorphQLTokenTypes.STRING -> STRING_KEYS
            MorphQLTokenTypes.NUMBER -> NUMBER_KEYS
            MorphQLTokenTypes.COMMENT -> COMMENT_KEYS
            MorphQLTokenTypes.BRACKETS -> BRACKETS_KEYS
            else -> EMPTY_KEYS
        }
    }
}
