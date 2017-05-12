const { spawn } = require('child_process')

module.exports = filename => spawn('awk', ['{a[i++]=$0} END {for (j=i-1; j>=0;) print a[j--] }', filename]).stdout
