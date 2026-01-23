package org.morphql.jetbrains

import com.intellij.openapi.fileTypes.LanguageFileType
import javax.swing.Icon

object MorphQLFileType : LanguageFileType(MorphQLLanguage) {
    override fun getName(): String = "MorphQL File"

    override fun getDescription(): String = "MorphQL query file"

    override fun getDefaultExtension(): String = "morphql"

    override fun getIcon(): Icon = MorphQLIcons.FILE
}
