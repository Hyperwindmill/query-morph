package org.morphql.jetbrains

import com.intellij.psi.tree.IElementType
import com.intellij.psi.tree.TokenSet

interface MorphQLTokenTypes {
    companion object {
        val KEYWORD = IElementType("KEYWORD", MorphQLLanguage)
        val FUNCTION = IElementType("FUNCTION", MorphQLLanguage)
        val OPERATOR = IElementType("OPERATOR", MorphQLLanguage)
        val STRING = IElementType("STRING", MorphQLLanguage)
        val NUMBER = IElementType("NUMBER", MorphQLLanguage)
        val IDENTIFIER = IElementType("IDENTIFIER", MorphQLLanguage)
        val COMMENT = IElementType("COMMENT", MorphQLLanguage)
        val BRACKETS = IElementType("BRACKETS", MorphQLLanguage)
        val BAD_CHARACTER = IElementType("BAD_CHARACTER", MorphQLLanguage)

        val KEYWORDS = TokenSet.create(KEYWORD)
        val COMMENTS = TokenSet.create(COMMENT)
        val STRINGS = TokenSet.create(STRING)
    }
}
