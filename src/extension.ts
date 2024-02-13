import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.workspace.onDidSaveTextDocument((document: vscode.TextDocument) => {
        vscode.window.showInformationMessage(`File saved: ${document.fileName}`);
        // Here, you would add the code to update the zyBooks code editor.
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
