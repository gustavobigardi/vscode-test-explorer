import * as vscode from 'vscode';
import { NodeState } from './state';
import { TestCollection } from './testCollection';
import { TestSuiteNode } from './testSuiteNode';
import { TestSuiteInfo, TestInfo } from '../adapter/api';

export type TreeNodeUpdates = 'none' | 'send' | 'recalc';

export interface TreeNode {
	readonly info: TestSuiteInfo | TestInfo;
	readonly state: NodeState;
	neededUpdates: TreeNodeUpdates;
	readonly log: string | undefined;
	readonly collection: TestCollection;
	readonly parent: TestSuiteNode | undefined;
	readonly children: TreeNode[];
	getPath(): string[];
	outdateState(): void;
	resetState(): void;
	getTreeItem(): vscode.TreeItem;
}
