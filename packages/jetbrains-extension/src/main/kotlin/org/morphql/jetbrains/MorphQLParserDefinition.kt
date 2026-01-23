package org.morphql.jetbrains

import com.intellij.lang.ASTNode
import com.intellij.lang.ParserDefinition
import com.intellij.lang.PsiParser
import com.intellij.lexer.Lexer
import com.intellij.openapi.project.Project
import com.intellij.psi.FileViewProvider
import com.intellij.psi.PsiElement
import com.intellij.psi.PsiFile
import com.intellij.psi.tree.IFileElementType
import com.intellij.psi.tree.TokenSet

class MorphQLParserDefinition : ParserDefinition {
    companion object {
        val FILE = IFileElementType(MorphQLLanguage)
    }

    override fun createLexer(project: Project?): Lexer = MorphQLLexer()

    override fun createParser(project: Project?): PsiParser = MorphQLParser()

    override fun getFileNodeType(): IFileElementType = FILE

    override fun getCommentTokens(): TokenSet = MorphQLTokenTypes.COMMENTS

    override fun getStringLiteralElements(): TokenSet = MorphQLTokenTypes.STRINGS

    override fun createElement(node: ASTNode?): PsiElement = MorphQLTokenTypes.BAD_CHARACTER as PsiElement // Dummy

    override fun createFile(viewProvider: FileViewProvider): PsiFile = MorphQLFile(viewProvider)
}
