package org.morphql.jetbrains

import com.intellij.extapi.psi.PsiFileBase
import com.intellij.openapi.fileTypes.FileType
import com.intellij.psi.FileViewProvider

class MorphQLFile(viewProvider: FileViewProvider) : PsiFileBase(viewProvider, MorphQLLanguage) {
    override fun getFileType(): FileType = MorphQLFileType
    override fun toString(): String = "MorphQL File"
}
