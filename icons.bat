set file=public\js\uikit-icons.js
if exist %file% (
	del %file% /F /Q
)
rd uk\custom\icons /S /Q
robocopy src\icons uk\custom\icons /E /NS /NC /NFL /NDL /NP /NJH /NJS
cd uk
cmd /c npm run compile
robocopy dist\js ..\public\js uikit-icons.js /NS /NC /NFL /NDL /NP /NJH /NJS
cd ../