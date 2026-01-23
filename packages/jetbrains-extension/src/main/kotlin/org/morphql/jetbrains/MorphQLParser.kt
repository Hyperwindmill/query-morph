package org.morphql.jetbrains

import com.intellij.lang.ASTNode
import com.intellij.lang.PsiBuilder
import com.intellij.lang.PsiParser
import com.intellij.psi.tree.IElementType

class MorphQLParser : PsiParser {
    override fun parse(root: IElementType, builder: PsiBuilder): ASTNode {
        val rootMark = builder.mark()
        while (!builder.eof()) {
            builder.advanceLexer()
        }
        rootMark.done(root)
        return builder.treeBuilt
    }
}
