# l’idéalAmore — prototype PWA 0.1

## Ce que contient cette archive
- Une interface mobile web installable (PWA) pour iPhone et Android via un hébergement HTTPS.
- Un parcours de déclaration 18+, découverte de profils fictifs, boutons J’aime/passer, onglets Matchs/Messages/Profil et écran Premium.
- Un service worker de cache de base.
- `supabase-schema.sql` : point de départ du schéma de données, à sécuriser avant utilisation réelle.

## Limites importantes
Cette version est une démonstration locale : aucun vrai compte, profil partagé, match réciproque, message, vérification d’âge ou paiement n’est opérationnel. Les profils sont fictifs. Ne l’ouvrez pas au public comme service de rencontre réel avant d’avoir connecté un backend, configuré les politiques de sécurité, testé les droits d’accès, ajouté blocage/signalement/modération, suppression de compte, politique de confidentialité et conditions d’utilisation.

## Publier gratuitement une première version web installable depuis l’iPhone
Le chemin le plus simple sans ordinateur est un hébergement statique HTTPS gratuit (par exemple GitHub Pages). Les interfaces peuvent évoluer et les services gratuits ont des limites.

1. Dans Safari, ouvrez `https://github.com/` et créez un compte si nécessaire.
2. Créez un nouveau dépôt public nommé `idealAmore` (pour cette étape de démonstration uniquement).
3. Téléversez les fichiers de cette archive à la racine du dépôt : `index.html`, `styles.css`, `app.js`, `manifest.webmanifest`, `sw.js`, `icon.svg`.
4. Dans le dépôt : **Settings → Pages**. Choisissez **Deploy from a branch**, sélectionnez `main` et `/ (root)`, puis **Save**.
5. Attendez que GitHub Pages fournisse une adresse HTTPS. Ouvrez cette adresse dans Safari.
6. Sur iPhone : bouton **Partager** → **Sur l’écran d’accueil** → activez l’ouverture comme app si l’option est proposée → **Ajouter**.
7. Sur Android : ouvrez l’adresse dans Chrome puis menu → **Installer l’application** ou **Ajouter à l’écran d’accueil**.

Les menus peuvent varier selon les versions iOS/Android. Une PWA installée reste une application web, pas une application publiée dans l’App Store ou Google Play.

## Budget et publication native
- Cette première PWA peut être hébergée gratuitement sur un service avec offre gratuite.
- Pour une application native publiée officiellement, il faut respecter les exigences et frais des programmes développeurs des boutiques. Vérifiez les tarifs et règles actuels avant de vous engager.
- Ne payez aucun service pour l’instant. Le backend et les fonctions réelles seront l’étape suivante.

## Backend Supabase
Quand vous serez prêt :
1. Créez un projet sur `https://supabase.com/` et vérifiez les limites du forfait gratuit.
2. Utilisez l’éditeur SQL pour examiner le schéma `supabase-schema.sql`.
3. N’exécutez pas ce schéma en production sans policies RLS testées et fonctions serveur pour les matchs, signalements et messagerie.
4. N’intégrez jamais la clé `service_role` dans le code client.
