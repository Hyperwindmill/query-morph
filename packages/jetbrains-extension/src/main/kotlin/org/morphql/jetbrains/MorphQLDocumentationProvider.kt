package org.morphql.jetbrains

import com.intellij.lang.documentation.AbstractDocumentationProvider
import com.intellij.psi.PsiElement
import com.intellij.psi.impl.source.tree.LeafPsiElement

class MorphQLDocumentationProvider : AbstractDocumentationProvider() {
    override fun generateDoc(element: PsiElement?, originalElement: PsiElement?): String? {
        if (element is LeafPsiElement) {
            val text = element.text.lowercase()
            return MorphQLDocumentation.DOCS[text]
        }
        return null
    }

    override fun getCustomDocumentationElement(
        editor: com.intellij.openapi.editor.Editor,
        file: com.intellij.psi.PsiFile,
        contextElement: PsiElement?,
        targetOffset: Int
    ): PsiElement? {
        if (contextElement is LeafPsiElement) {
            val type = contextElement.elementType
            if (type == MorphQLTokenTypes.KEYWORD || type == MorphQLTokenTypes.FUNCTION) {
                return contextElement
            }
        }
        return super.getCustomDocumentationElement(editor, file, contextElement, targetOffset)
    }
}
