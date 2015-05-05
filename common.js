
String.prototype.replaceAll = function (find, replace) {
    var str = this;
    return str.replace(new RegExp(find, 'g'), replace);
};

String.prototype.toCamelCase = function() {
    return this.replace(/^([A-Z])|[\s-_](\w)/g, function(match, p1, p2, offset) {
        if (p2) return p2.toUpperCase();
        return p1.toLowerCase();
    });
};

function alert(text) {
    var alert = [[NSAlert alloc] init]
    [alert setMessageText:text]
    [alert addButtonWithTitle:'OK']
    [alert runModal]
}

function runCommand(cmd, path){
    var task = [[NSTask alloc] init];    
    task.setLaunchPath("/bin/bash");
    task.setArguments(cmd);
    task.launch();
}

function copyToClipboard(text) {
    var pasteBoard = NSPasteboard.generalPasteboard();
    pasteBoard.declareTypes_owner( [ NSPasteboardTypeString ], null );
    pasteBoard.setString_forType_(text, NSStringPboardType)
}

function UIColorFromColor(color) {
    return '[UIColor colorWithRed:' + color.red().toFixed(2) + ' green:' + color.green().toFixed(2) + ' blue:' + color.blue().toFixed(2) + ' alpha:' + color.alpha().toFixed(2) + ']'
}
