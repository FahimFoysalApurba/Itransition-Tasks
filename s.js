function q() { console.log('print("""' + q.toString().replace(/\\/g, '\\\\').replace(/"/g, '\\"') + 'q();""")'); }q();

