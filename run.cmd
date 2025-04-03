@echo off
IF "%1"=="" (
    "C:\Program Files\nodejs\node.exe"
) ELSE (
    IF "%1"=="-v" (
        "C:\Program Files\nodejs\node.exe" -v
    ) ELSE (
        "C:\Program Files\nodejs\node.exe" %*
    )
)
