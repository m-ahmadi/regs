set file=public/css/style.css
if exist %file% (
	del %file% /F /Q
)
cd src/site-scss
cmd /c node-sass site.scss > site.css --output-style expanded
cmd /c rtlcss site.css ../../%file%/
del site.css /F
cd ../../