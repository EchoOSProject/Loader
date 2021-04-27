# Echo - Systems Manager

Echo est un gestionnaire de sous-systèmes personnalisés, créés par la communauté.

Il peut vous servir à développer votre créativité mais aussi à profiter d'un espace de travail personnalis**é** et personnalis**able**.

C'est un moyen simple de s'intéresser au fonctionnement d'un ou de plusieurs système(s) d'exploitation de manière créative et sans trop s'embêter avec tous ces langages de programmation tels que l'Assembleur, le C ou le C++.

---

# Lancer Echo

Suivez simplement cette commande :

```
npm start <systemIdentifier>
```

---

# Compatibilité avec Electron

Le système que vous voulez utiliser requière la dépendance Electron ? Pas de problèmes, il suffit de lancer Echo avec cette commande :

```
npx electron . <systemIdentifier>
```

> Attention : Le "x" de "np**x**" n'est pas une faute de frappe. C'est un raccourci permettant d'exécuter des scripts personnalisés sans avoir à faire `npm run-script <scriptName>`. Veuillez garder un espace entre "electron" et le point qui suit.

---

# Echo's ToDoList

## Boot Manager :

- Check : ✅ - Vérifier le fichier d'identification des systèmes à utiliser.
- Boot : ✅ - Charger un système | À utiliser après la vérification!
- Unload : ✅ - Décharger un système.
- Reboot : ✅ - Redémarrer le système.

## Controller

- Alert : ❌ - Afficher une boîte d'alerte.
- Info : ❌ - Afficher une boîte d'information.
- Prompt : ❌ - Afficher une boîte d'entrée.

## Frames Manager

- Move : ❌ - Déplacer la fenêtre active.
- Resize : ❌ - Changer la taille de la fenêtre active.
- Minimize : ❌ - Minimiser la fenêtre active.
- Maximize : ❌ - Maximiser une fenêtre.
