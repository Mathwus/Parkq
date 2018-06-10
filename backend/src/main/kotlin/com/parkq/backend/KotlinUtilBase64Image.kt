package com.parkq.backend

import java.io.File
import java.util.*

class KotlinUtilBase64Image {
    companion object {
        fun encoder(filePath: String): String{
            val bytes = File(filePath).readBytes()
            val base64 = Base64.getEncoder().encodeToString(bytes)
            return base64
        }
    }
}