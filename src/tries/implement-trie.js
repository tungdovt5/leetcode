/**
 * Problem: Implement Trie (Prefix Tree)
 * A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently 
 * store and retrieve keys in a dataset of strings. There are various applications of this 
 * data structure, such as autocomplete and spellchecker.
 * 
 * Implement the Trie class:
 * - Trie() Initializes the trie object.
 * - void insert(String word) Inserts the string word into the trie.
 * - boolean search(String word) Returns true if the string word is in the trie, and false otherwise.
 * - boolean startsWith(String prefix) Returns true if there is a previously inserted string word 
 *   that has the prefix prefix, and false otherwise.
 */

class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.root;
        
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
        }
        
        node.isEndOfWord = true;
    }
    
    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const node = this._traverse(word);
        return node !== null && node.isEndOfWord;
    }
    
    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        return this._traverse(prefix) !== null;
    }
    
    /**
     * Helper method to traverse the trie
     * @private
     */
    _traverse(str) {
        let node = this.root;
        
        for (const char of str) {
            if (!node.children.has(char)) {
                return null;
            }
            node = node.children.get(char);
        }
        
        return node;
    }
}

module.exports = Trie;
