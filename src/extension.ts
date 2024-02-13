import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Extension is now active!');

    let disposable = vscode.workspace.onDidSaveTextDocument((document: vscode.TextDocument) => {
        console.log(`File saved: ${document.fileName}`);
        vscode.window.showInformationMessage(`File saved: ${document.fileName}`);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
