# open_services_web

   Version Web de l'application Open Services.

Première des choses à faire après avoir recuperer le projet , tapez npm update.

Pour vos test en local tapez npm run dev.


Voici comment est structuré le projet

# Public 

   Contient tout ce qui est public dans notre projet
    
      -> public/css : pour le css
      -> public/fonts: pour le style d'écriture
      -> public/images: pour les images
      -> public/js : contient tout nos scripts js
          -> /app : contient les js propres à l'application, donc celui codé par nos developpeurs
          -> /externs: Tout les fichiers js externes. (boostrap.min.css, etc....)

# Views

    Contient toutes les vues de l'application
       
      -> views/layout: Ce sont les pages qui forment le corps de l'application , elles servent à éviter la repitition de code dans les pages
      -> views/modals: le code des fichiers modaux
      -> views/pages: Toutes les pages fonctionnelles

Voilà en bref la description des parties importantes , le reste c'est du basique express js.

**NB: Surtout respectez strictement l'organisation du projet lorsque vous codez**
   


