**Le projet a été fait par Nathan AMAR & Ruben AMAR**

# Michelin & Relais Chateaux`

> Sleep well with Relais & Châteaux




# 🐣 Introduction
### 🏃‍♀️ Steps  done

### Michelin Restaurant
Nous avons dans un premier temps récupérer la liste de tous les restaurants étoilés de France sur le site
Michelin. Pour se faire, nous avons suivi un tuto sur YouTube expliquant comment scrapper des données sur 
un site internet. Nous sommes donc rentré dans le lien de chaque restaurant et nous y avons récupéré le 
nom du restaurant et le nom du chef du restaurant. Nous avons itéré cette opération pour toutes les pages
du site Michelin afin de récupérer l'ensemble des restaurants étoilés de France. Nous avons ensuite stocké
la liste dans un fichier JSON.

### Relais Chateaux
Ensuite, nous sommes passés au site Relais et Châteaux. La structure de ce site était plus complexe. Pour
récupérer les Hotels Restaurants de France, nous avons dû simuler l'ouverture du site ainsi que toutes les 
étapes intermédiaires comme le passage à la page suivante afin de récupérer les données dont nous avions
besoin grace à puppeteer recorder.Nous avons ensuite récupéré les données dans un fichier JSON.


### Starred Restaurants
Nous avons par la suite créé un nouveau fichier JSON dans lequel nous avons combiné les deux fichiers JSON
précédents afin d'avoir seulement la liste des hôtels dans lesquels il y avait des restaurants étoilés.




## 🎯 Final goal

L'objectif était ensuite de récupérer les prix des meilleurs deals pour le week-end. Pour se faire, 
nous avons tout d'abord créé une fonction permettant de faire la liste de tous les samedis de chaque mois.
Ensuite, nous avons été récupéré la liste des prix de chaque week-end pour chaque hôtel en faisant attention 
aux dates pour lesquelles les hôtels étaient complets. Nous avons ensuite récupéré le meilleur deal pour chaque
week-end dans un fichier JSON.


## Website

[https://michelin-relaischateaux.netlify.com/](https://michelin-relaischateaux.netlify.com/)
