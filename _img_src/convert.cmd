@echo off
set magic="C:\Program Files\ImageMagick-7.0.10-Q16-HDRI\magick.exe"
:: xcopy /t /e
goto :end

for /D %%a in (1.2, 1.3, 2.1, 2.2, 3.0) do (
echo ------- %%a
%magic% "gal%%a/*.jpg" -set filename:f %%t -resize 240  "../_temp/gal%%a/%%[filename:f].jpg"
)
for /D %%a in (3.1, 3.3, 3.4, 3.5, 3.6, 4.0, 3.2 ) do (
echo ------- %%a
%magic% "gal%%a/*.jpg" -set filename:f %%t -resize 400  "../_temp/gal%%a/%%[filename:f].jpg"
)

:end

for /D %%a in (0.1, 0.2, 0.3) do (
echo ------- %%a
%magic% "0/%%a.jpg" -set filename:f %%t -resize 400  "../_temp/0/%%[filename:f].jpg"
)

 
forfiles /p "..\_temp" /m *.jpg  /s /c "%cd%\ect.exe -9 -strip -progressive  @path"
forfiles /p "..\_temp" /m *.png  /s /c "%cd%\ect.exe -9 -strip   @path"