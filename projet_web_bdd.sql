-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 13 oct. 2021 à 15:34
-- Version du serveur : 10.4.21-MariaDB
-- Version de PHP : 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `projet_web_bdd`
--

-- --------------------------------------------------------

--
-- Structure de la table `application`
--

CREATE TABLE `application` (
  `id_application` int(5) NOT NULL,
  `ap_id_job_offer` int(5) NOT NULL,
  `ap_name` varchar(20) NOT NULL,
  `ap_email` varchar(50) NOT NULL,
  `ap_lvl` int(3) NOT NULL,
  `ap_text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `application`
--

INSERT INTO `application` (`id_application`, `ap_id_job_offer`, `ap_name`, `ap_email`, `ap_lvl`, `ap_text`) VALUES
(1, 12, 'test', 'test@ankama.dofus', 100, 'j qs qglh gqhlvh qh hosoih j,k oj whl jv hqjkhkj h qhjk vjk hl:');

-- --------------------------------------------------------

--
-- Structure de la table `company`
--

CREATE TABLE `company` (
  `id_company` int(11) NOT NULL,
  `co_name` varchar(50) NOT NULL,
  `co_xp` int(11) NOT NULL,
  `co_kamas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `company`
--

INSERT INTO `company` (`id_company`, `co_name`, `co_xp`, `co_kamas`) VALUES
(1, 'EN ROUTE POUR L\'AVENTURE', 23168, 280),
(2, 'POUSSÉ PAR LE VENT', 11581, 0),
(3, 'SERVICE DANS LA MILICE', 19116, 241),
(4, 'C\'EST UN MÉTIER QUI RENTRE', 16952, 204),
(5, 'RAMDAM SUR INCARNAM', 5791, 0);

-- --------------------------------------------------------

--
-- Structure de la table `job_offer`
--

CREATE TABLE `job_offer` (
  `id_job_offer` int(5) NOT NULL,
  `jo_name` varchar(50) NOT NULL,
  `jo_xp` int(8) NOT NULL,
  `jo_kamas` int(11) NOT NULL,
  `jo_address` varchar(20) NOT NULL,
  `jo_description` text NOT NULL,
  `jo_id_company` int(5) NOT NULL,
  `jo_recruiter` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `job_offer`
--

INSERT INTO `job_offer` (`id_job_offer`, `jo_name`, `jo_xp`, `jo_kamas`, `jo_address`, `jo_description`, `jo_id_company`, `jo_recruiter`) VALUES
(1, 'L\'ANNEAU DE TOUS LES DANGERS', 197, 0, ' Incarnam [-3,-3]', 'Parlez à Ganymède qui vous dit que pour devenir un héros vous devriez vous attirer les faveurs des dieux. Il vous conseil alors d\'aller rencontrer le Maître Hoboulo qui pourra mettre du piment dans vos prochaines aventures.Maître Hoboulo vous dit alors qu\'il est ici pour vous apprendre les rudiments des métiers. Afin de vous former, il vous demandera alors de fabriquer un anneau.Pour fabriquer votre premier anneau il vous faudra récolter des ressources dans la salle présente à partir de différents métiers.Ainsi récoltez une ressource de chaque de la liste ci-dessous. Les positions des différentes ressources sur la map sont indiquées. Vous devez maintenant avoir dans votre inventaire 1 x Ortie, 1 x Goujon, 1 x Bois de Frêne, 1 x Fer et 1 x Blé.Dirigez vous alors vers l\'atelier afin de créer votre premier anneau à l\'aide des ressources collectées. (double cliquez sur la recette sur la gauche afin de la mettre automatiquement dans les cases de craft puis cliquez sur fusionner pour créer l\'objet). Reparlez à Hoboulo afin de lui montrer votre création avant de repartir en descendant les escaliers. Reparlez maintenant à Ganymède afin de terminer la quête.', 1, 4),
(2, 'SOUS LE REGARD DES DIEUX', 197, 0, ' Incarnam [-3,-3]', 'Joris vous propose de tester l\'idole que vous avez fabriquée lors de la quête précédente.quete Sous le regard des dieuxquete Sous le regard des dieux dofusRendez-vous alors dans la salle de combat en montant les escaliers située sur la gauche.quête Sous le regard des dieuxSous le regard des dieux dofusDarm vous apprend que les idoles ont étés inventées par les dieux afin de tester le courage de leur fidèles. Vous apprenez aussi que ces idoles permettent de rendre les combats plus difficiles.quete Sous le regard des dieuxEn revanche la difficulté croissante du combat est comblée par des récompenses augmentées (Petit exemple : Idoles donnant un total de 100 en score équivaut à avoir 500 de sagesse et 200 de prospection à la fin du combat). Darm souhaite voir comment vous vous en sortez en combat avec une idole d’équipée, il vous met alors au défit d’affronter l\'une de ses créatures dans un premier temps sans idoles puis avec une idole d’équipée.quete Sous le regard des dieuxquete Sous le regard des dieuxLe combat contre Tigrimas Céleste se lance alors.quete Sous le regard des dieuxquete Sous le regard des dieuxTigrimas CélesteLancer de Feu Doux : Frappe du 8 dans l\'élément neutre sur une case en ligne et à une distance maximale de 3PO.À la fin du combat reparlez à Darm qui accepte de vous faire faire un combat avec une idole équipée.quete Sous le regard des dieuxquete Sous le regard des dieux Pour équiper votre idole, ouvrez l\'onglet ', 1, 4),
(3, 'RÉPONSES À TOUT', 197, 6, ' Incarnam [-3,-3]', 'Joris vous apprend que pour accomplir votre destin vous devez bien vous connaitre. C\'est dans cette salle que vous apprendrez qui vous êtes, ce que vous voulez et ou vous voulez aller.\r\nRéponses à tout dofus\r\nCliquez sur les 3 stèles indiquez ci-dessous.\r\nquête Réponses à tout dofus\r\nRéponses à tout dofus\r\nL\'une des stèles vous apprendra qui vous êtes grâce à une présentation du Dieu auquel vous fêtes allégeance, une autre vous présentera le monde des douze et une troisième vous présentera les 6 Dofus primordiaux.\r\nRéponses à tout dofus\r\nquete Réponses à tout\r\nRéponses à tout\r\nUne fois ces 3 choses acquises, reparlez à Joris afin de terminer votre apprentissage', 1, 2),
(4, 'LE VILLAGE DANS LES NUAGES', 673, 14, ' Incarnam [-3,-3]', 'Lykhen remarque que vous êtes nouveau dans les environs et vous conseil d\'aller rencontrer Ternette au village.\r\nquête Le village dans les nuages\r\nLesurviven vous apprend que Ternette est la maire du village et l\'un des membres d\'une célèbre famille : les Nhin. D\'après lui elle souhaite rencontrer tous les nouveaux arrivants afin de les aider dans leur exploration de l\'île céleste.\r\nquête Le village dans les nuages dofus\r\nLe village dans les nuages dofus\r\nAllez donc à la rencontre de cette femme en [-1,-3].\r\nLe village dans les nuages\r\nLe village dans les nuages\r\nPrésentez vous alors à la vieille Ternette qui se tient à côté du zaap.\r\nLe village dans les nuages\r\nTernette vous présente alors rapidement le village et toutes les choses que vous pouvez y faire. D\'après elle, c\'est un lieu ou il fait bon vivre (pensez y retourner pour votre retraite lorsque vous aurez vécus les plus folles aventures).\r\nLa Nhin vous propose alors de rencontrer les personnes les plus influentes en Incarnam.\r\nLe village dans les nuages\r\nLe village dans les nuages\r\nAinsi, il vous faut rencontrer les quatre personnes listées ci-dessous. Vous les trouverez au positions indiquées sur la map ci-dessous (il n\'y a que 3 positions car 2 des protagonistes sont sur la même map, l’un d\'ans une maison l\'autre en dehors).\r\nLe village dans les nuages\r\nLe village dans les nuages\r\nEn [0,-3], présentez vous à Berb Nhin.\r\nLe village dans les nuages\r\nBerb vous apprend avoir pris le poste de son père suite à sa retraite. Il est désormais charger de s\'assurer de la bonne qualité des produits fabriqués en Incarnam et c\'est lui qui remet le titre Fils d\'Incarnam.\r\nEn lui demandant comment devenir Fils d\'Incarnam vous pourrez lancer la quête : Produits naturels.\r\nAllez maintenant parler à une seconde personne dans la taverne.\r\nLe village dans les nuages\r\nLe village dans les nuages\r\nLe village dans les nuages\r\nPrésentez vous à l\'effrayant tavernier Grobid.\r\nLe village dans les nuages\r\nGrobid vous apprend dès le départ qu\'il ne possède pas de Dofus et que c\'est très bien ainsi car tous les aventuriers tenteraient alors de le voler et ce serait pas bon pour son commerce. Il vous apprend aussi avoir été autrefois membre de la Milice Céleste avant de se mettre à son propre compte.\r\nLe village dans les nuages\r\nLe village dans les nuages\r\n\r\n \r\nEn [1,-3], présentez vous à la jeune commerçante Eniripsa.\r\nLe village dans les nuages\r\nHollie vous apprend qu\'au fil de vos aventures vous devrez améliorer vos équipements et que pour créer vos équipements il vous faudra différentes ressources, certaines qui s’obtiennent en combattant des monstres d\'autre par la récolte grâce à différents métiers. Elle vous apprend aussi que vous pouvez acheter toutes ces ressources aux Hôtels de ventes (que l\'on appellera HDV) lesquelles sont vendues par d\'autres aventuriers.\r\nLe village dans les nuages\r\nLe village dans les nuages\r\nLe village dans les nuages\r\nRentrez dans le bâtiment de la Milice en [0,-4].\r\nPrésentez vous alors au grand Capitaine des Kerubims.\r\nLe village dans les nuages\r\nIl vous apprend être le chef des Kerubims, personnes qui veillent à la sécurité des habitants d\'Incarnam. Il vous conte alors les différentes batailles ayant eue lieu en Incarnam, tels que l\'invasion des Shushus, la bataille contre le Milimilou ou encore contre la bande des trois Crânes, des combats contres des craqueleurs colériques aux araknes des cavernes. Actuellement les miliciens travaillent pour garder les chafers dans les limites du cimetière et réguler la population des âmes perdues afin de conserver la tranquillité d\'Incarnam.\r\nSi vous souhaitez lui proposer vos services vous lancerez une série de quêtes dont la première est : Mise à l\'épreuve.\r\nLe village dans les nuages\r\nLe village dans les nuages\r\nUne fois que vous avez parler aux quatre personnes décrites ci-dessus, retournez auprès de Ternette Nhin en [-1,-3].\r\nLe village dans les nuages\r\nLe village dans les nuages\r\nAnnoncez alors à Ternette avoir rencontré les personnes qu’elle voulais que vous rencontriez.\r\nLe village dans les nuages\r\nEnfin Ternette aborde le sujet des Dofus, pondus par des dragons. Elle n\'en connait pas trop l\'histoire elle-même mais vous conseil de rencontrer Fécaline qui pourra vous en apprendre beaucoup sur les dragons et leurs œufs magiques.\r\nLe village dans les nuages\r\nLe village dans les nuages\r\nRendez-vous à la bibliothèque en [2,-3].\r\nLe village dans les nuages\r\nLe village dans les nuages\r\nLe village dans les nuages\r\nEn [2-,3], entrez dans la bibliothèque.\r\nPrésentez vous à la belle demoiselle à la magnifique chevelure verte.\r\nLe village dans les nuages\r\nFécaline vous apprend que vous n\'êtes pas le premier à tenter de mettre la main sur les Dofus mais que vous avez quelque chose de différentes des autres aventuriers. Elle ne s\'estime pas être une Norde (personne qui lis l\'avenir et que vous pourrez rencontrer dans vos aventures futures sur Frigost) donc elle ne connais rien de votre avenir.', 1, 2),
(5, 'ESPOIRS ET TRAGÉDIES', 2576, 63, 'Incarnam [2,-3]', 'Fécaline vous apprend que les Dofus permettent de garde l\'harmonie du monde des Douze. Ils ont été réunis puis volés puis retrouvés et cette fois-ci séparés. Elle vous conseil alors de lire le livre sur la légende de Rykke Errel.\r\nquete Espoirs et tragédies\r\nEspoirs et tragédies dofus\r\nCliquez sur le livre situé dans le coin bas de la bibliothèque.\r\nquete Espoirs et tragédies dofus\r\nEspoirs et tragédies dofus\r\nLa légende raconte qu\'il y a longtemps un dragon nommé Bolgrot arriva en Amakna. Un certain iop intrépide nommé Rykke Errel était heureusement là pour le terrasser, mais au lieu de ça le dragon se prosterna devant le iop et lui jura fidélité. Les deux protagonistes devinrent  alors les meilleurs amis du monde des Douze. Cependant, un jour le jeune iop tomba amoureux d\'une belle magicienne sous le doux nom de Helséphine. Le jeune Rykke décida alors de la présenter à son amis mais tout ne se passa pas comme le iop le souhaitais. Le dragon était jaloux et tua Helséphine avant de réduire en cendres tout Amakna. Le iop décida de mettre un terme à la vie funeste du dragon dans un effroyable combat. Cependant le iop mourra quelques temps plus tard de ses blessures. Les habitants d\'Amakna trouvèrent alors dans les entrailles du dragon 6 œufs qui pouvaient donner le pouvoir d\'un Dieu à qui les posséderait. Il fut alors décidé de les cacher.\r\nquete Espoirs et tragédies\r\nEspoirs et tragédies\r\nEspoirs et tragédies\r\nUne fois la légende lue, reparlez à Fécaline.\r\nEspoirs et tragédies\r\nFécaline vous conseil de rencontrer trois personnes ayant déjà tenté de s\'approprier les 6 Dofus.\r\nEspoirs et tragédies\r\nEspoirs et tragédies\r\n\r\n \r\nVous trouverez les différents personnages aux positions indiqués sur la map ci-dessous.\r\nEspoirs et tragédies\r\nEspoirs et tragédies\r\nEn [-2,-3], parlez à Lykhen Lesurviven.\r\nEspoirs et tragédies\r\nLykhen vous conte ses exploits et vous apprend avoir failli posséder les 6 Dofus primordiaux mais y avoir renoncé car il savais que les réunir causerait l\'apocalypse et qu\'il aimé trop le monde des Douze pour lui infliger ça.\r\nEspoirs et tragédies\r\nEspoirs et tragédies\r\nEspoirs et tragédies\r\nEspoirs et tragédies\r\nFinalement Lykhen vous apprend qu\'il se fiche de vous. En effet l\'histoire d\'apocalypse n\'est en fait là seulement pour effrayer les gens. Avant de vous laisser tranquille Lykhen vous apprend que l\'important n\'est pas de trouver les Dofus mais de découvrir des amis, de nouvelles contrées et de nouvelles créatures en les recherchant et c\'est ça qui est beau.\r\nEspoirs et tragédies\r\nEspoirs et tragédies\r\nEspoirs et tragédies\r\nEspoirs et tragédies\r\nEn [0,-3], à l\'intérieur de la taverne, vous pourrez parler à Aléha une Ecaflip.\r\nEspoirs et tragédies\r\nAléha vous apprend être revenue en Incarnam car elle n\'aime pas trop courir l\'aventure. Aléha vous apprend que certains de ces Dofus sont gardés par des créatures telles que le Dark Vlad, le Minotoror ou encore le Chêne Mou. De son côté elle a préféré se fier à ses dés afin de savoir quelle direction prendre et elle a finalement atterrit ici.\r\nEspoirs et tragédies\r\nEspoirs et tragédies\r\nEspoirs et tragédies\r\nElle vous propose alors de jeter les dés à votre tour. Une fois ceux-ci lancés Aléha vous apprendra que vous aurez beaucoup plus de chance qu’elle de trouver les Dofus.\r\nEspoirs et tragédies\r\nEspoirs et tragédies\r\nFinalement en [2,-1], demandez à Oskar Khas ce qui lui est arrivé pour se retrouver en fantôme.\r\nEspoirs et tragédies\r\nOskar vous apprend être un ancien voleur et avoir tenté d\'obtenir le Dofus Emeraude, cependant cela ne s’est pas passé comme il le souhaitait et il en est mort. Au même moment un Feu Maléfique apparait pour embêter le spectre, mais ce-dernier ayant filé comme l\'éclair la bête s\'en prend à vous.\r\nEspoirs et tragédies\r\nEspoirs et tragédies\r\nEspoirs et tragédies\r\nEspoirs et tragédies\r\nFeu malèfique dofus\r\nVolfeu : Frappe du 5 dans l\'élément feu environ et attire de 1 case.\r\nBrûlure Maléfique : Frape du 8 dans l\'élément feu.\r\nLe combat se lance contre le Feu Maléfique.\r\nEspoirs et tragédies\r\nEspoirs et tragédies\r\nLorsque vous avais vaincu la bête et parlé aux trois quêteurs de Dofus, retournez auprès de Fécaline en [2,-3].\r\nEspoirs et tragédies\r\nEspoirs et tragédies\r\nFécaline vous a ainsi prouvé que certains des chercheurs de Dofus sont têtus et veulent allé jusqu\'au bout et que d\'autre abandonnent à la moindre difficulté.\r\n', 1, 2),
(6, 'DANS LA GUEULE DU MILIMILOU', 5085, 122, 'Incarnam [2,-3]', 'Fécaline vous parle alors de Hargnok, une certaine personne qui possédait plusieurs œufs de dragons mais qui a finalement trouvé plus fort que lui.\r\nDans la gueule du Milimilou dofus\r\nApparemment Hargnok a été dévoré par le Milimilou une bête qui sévit sur Incarnam. Certains disent que les Dofus de Hargnok seraient encore dans l\'antre de la bête. Pour trouver le monstre, Fécaline vous conseil de demander des conseils au Fossoyeur du cimetière.\r\nquête Dans la gueule du Milimilou dofus\r\nDans la gueule du Milimilou\r\nRendez-vous en [5,-1] afin de rencontrer le fossoyeur.\r\nquête Dans la gueule du Milimilou\r\nDans la gueule du Milimilou\r\nRenseignez vous alors sur le Milimilou auprès de Klasmor le fossoyeur.\r\nquete Dans la gueule du Milimilou dofus\r\nKlasmor vous apprend voir souvent le Milimilou sortir pour ronger des os mais qu\'il n\'ose pas l’approcher contrairement aux chafers qu\'ils a réussi à amadouer. Afin de rencontrer la bête il vous apprend que vous pouvez soit effectuer le donjon qu\'il garde et atteindre l\'endroit ou vit le Milimilou une fois le donjon terminé ou alors vous pouvez entrer directement via une vieille grille rouillée.\r\nDans la gueule du Milimilou dofus\r\nDans la gueule du Milimilou dofus\r\nDans la gueule du Milimilou\r\nDirigez vous sur la map de gauche et cliquez sur la grille du tombeau pour entrer.\r\nDans la gueule du Milimilou\r\nDans la gueule du Milimilou\r\n\r\n \r\nParlez alors au Milimilou qui se tient devant vous afin de l\'attaquer.\r\n﻿ATTENTION :﻿ Vous pouvez éviter le combat contre le Milimilou en lui donnant un pot de confiture. Ce pot de confiture s\'obtient dans la quête : La galette secrète (terminer la quête avant de lui donner le pot).\r\nDans la gueule du Milimilou\r\nLe combat se lance et s\'effectue seul.\r\nDans la gueule du Milimilou\r\nDans la gueule du Milimilou\r\nMilimilou\r\nGrognement : Boost le Milimilou de 2 PM pour 1 tour.\r\nÉventration : Frappe environ du 15 dans l\'élément neutre seulement au CàC.\r\nFinalement si vous restez hors de portée du CàC de la bête vous subirez aucun dommages.\r\n\r\n\r\nUne fois le combat terminé, Hargnok qui avais disparu apparait. Il semblerait que le Milimilou n\'était autre que lui.\r\nDans la gueule du Milimilou\r\nFinalement vous apprenez que Hargnok a vaincu le Milimilou mais que celui-ci l\'a mordu avant de mourir ce qui a transformé Hargnok en bête sauvage. Pour ce qui est de ses Dofus ceux-ci ont disparus, soit volés, soit mangés par Hargnok.\r\nDans la gueule du Milimilou\r\nDans la gueule du Milimilou\r\nRetournez voir Fécaline la Sage en [2,-3].\r\nDans la gueule du Milimilou\r\nDans la gueule du Milimilou\r\nFécaline vous apprend que vous aurez tout le temps de retrouver les Dofus car d\'après elle ils changent vite de mains. Finalement elle vous conseil de ne jamais renoncer face à l\'adversité.', 1, 2),
(7, 'DESTINATION ASTRUB', 3474, 84, ' Incarnam [2,-3]', 'Fécaline vous apprend que vous pouvez désormais quitter Incarnam si vous le souhaitez (ou alors faire les autres quêtes présentent en Incarnam si ce n\'est pas déjà fait).\r\nquête Destination Astrub dofus\r\nPartez à la rencontre de Maître Anemo en [4,-3] afin de vous envoler pour Astrub.\r\nquête Destination Astrub dofus\r\nquête Destination Astrub dofus\r\nParlez à Maître Anemo afin de partir pour Astrub.\r\nquête Destination Astrub dofus\r\nquête Destination Astrub dofus\r\nVous atterrirez alors devant la statue de votre dieu (pour ma part statue iop car mon dieu est le Iop). Parlez à votre donneur d\'ordre devant votre statue pour terminer la quête.', 1, 2),
(8, 'TRANSPORT PEU COMMUN', 556, 24, 'Incarnam [-1,-3]', 'Dîtes à Ternette que vous êtes pressé de découvrir l\'île céleste qu\'est Incarnam.\r\nquête Transport peu commun\r\nTernette vous apprend alors que Incarnam est un petit endroit mais que lorsque vous descendrez dans le Monde des Douze les étendues seront beaucoup plus grandes. Afin de se déplacer rapidement moyennant quelques kamas elle vous apprend qu\'il existe les zaap (l\'arche juste à côté d\'elle) qui permettent de voyager de l\'un à l\'autre. Plus le voyage est long plus le prix de ce dernier sera alors élevé.\r\nquête Transport peu commun dofus\r\nTransport peu commun\r\nTransport peu commun\r\nVous apprendrez aussi que pour pouvoir voyager vers un autre zaap, il faut au préalable avoir déjà visité celui-ci. Afin d\'en apprendre plus sur le fonctionnement des zaaps, Ternette vous conseil de rencontrer Xélora qui est chargée de l\'entretien des zaaps des environs.\r\nTransport peu commun\r\nTransport peu commun\r\nRendez-vous en [2,-5] au zaap des Pâturages afin de parler à Xélora Fistol.\r\nTransport peu commun\r\nTransport peu commun\r\n\r\n \r\nQuestionnez alors Xélora sur l\'origine des zaaps.\r\nTransport peu commun\r\nXélora vous apprend que c\'est le Dieu Xélor qui a inventé les zaaps et les zaapis (petits zaap pour voyager dans les grandes citées tels que Brâkmar et Bonta) afin que les Xélors n\'arrivent plus en retard. Elle vous apprendra que les zaap s sont des fragments du Dieu Xélor et que pour les reparer il lui suffit de taper dessus afin de réveiller le fragment.\r\nTransport peu commun\r\nTransport peu commun\r\nTransport peu commun\r\nTransport peu commun\r\nIl vous faut maintenant examiner le zaap en cliquant dessus.\r\nTransport peu commun\r\nPuis vous pouvez utiliser le zaap ou refaire le chemin à pied afin de retourner auprès de Ternette Nhin.\r\nTransport peu commun\r\nTransport peu commun\r\nAnnoncez votre discussion palpitante avec Xélora à Ternette.', 2, 2),
(9, 'DES VESTIGES DE LÉGENDE', 2127, 52, 'Incarnam [-1,-3]', 'Ternette vous apprend alors que les Dieux sont déjà venus en Incarnam.\r\nquete Des vestiges de légende\r\nTernette vous dit que lors de leur passage en Incarnam, ceux-ci ont laissé des vestiges témoignant de leur puissance avec une stèle qui conte leur histoire.\r\nquete Des vestiges de légende dofus\r\nDes vestiges de légende dofus\r\nTernette vous demande de visiter seulement 5 de ces vestiges parmi les douze. Vous pouvez visiter tous les vestiges si vous le voulez, ou que cinq mais ils doivent être situées dans les 5 zones différentes de l\'île indiquées ci-dessous. Pour aller plus vite voici un exemple des 5 vestiges que vous pouvez visiter sur la map. Libre à vous d\'en visiter d\'autre.\r\nDes vestiges de légende\r\nDes vestiges de légende\r\nEn [-2,-2] près du lac, vous pouvez voir les vestiges du Dieu Sacrieur.\r\nDes vestiges de légende\r\nDes vestiges de légende\r\nEn [1,-1] dans la forêt, vous pouvez visiter les vestiges de Crâ.\r\nDes vestiges de légende\r\nDes vestiges de légende\r\nEn [0,-3] à la taverne et donc sur la route des âmes, vous pouvez voir les vestiges de Pandawa.\r\nDes vestiges de légende\r\nDes vestiges de légende\r\n\r\n \r\nEn [0,-5], dans les champs vous pourrez observer les vestiges d\'Ecaflip.\r\nDes vestiges de légende\r\nDes vestiges de légende\r\nDans les pâturages en [1,-5] vous apercevrez les vestiges de Féca.\r\nDes vestiges de légende\r\nDes vestiges de légende\r\nEnfin retournez auprès de Ternette en [-1,-3].\r\nDes vestiges de légende\r\nDes vestiges de légende\r\nAnnoncez alors à Ternette votre découverte d\'au moins 5 vestiges laissés par les Dieux.', 2, 2),
(10, 'VU DU CIEL', 2867, 68, 'Incarnam [-1,-3]', 'Demandez plus de renseignements à Ternette sur le Monde des Douze.\r\nVu du ciel dofus\r\nTernette vous fait l\'éloge des choses que vous pouvez rencontrer dans le Monde des Douze mais vous conseil d\'aller voir Matu Vuh et Galilea respectivement au Nord et au Sud d\'Incarnam afin qu\'ils vous montrent des lieux du monde des Douze.\r\nquete Vu du ciel dofus\r\nquête Vu du ciel\r\nMatu Vuh se trouve au Nord en [-1,-6] et Galilea se trouve en [-1,1].\r\nquête Vu du ciel\r\nquête Vu du ciel\r\nEn [-1,-6], Matu Vuh vous parle de sa lunette astromagique qui permet de voir les contrées du Monde des Douze.\r\nquête Vu du ciel\r\nMatu vous apprend que c\'est grâce à Ternette qu\'il a pu installer sa lunette ici et que grâce à elle il a pu prédire des tempêtes.', 2, 2),
(11, 'MISE À L\'ÉPREUVE', 556, 12, 'Incarnam [0,-4]', 'Proposez vos services au Capitaine des Kerubims.\r\nquête Mise à l\'épreuve\r\nAfin d’intégrer les rangs de la milice en tant que suppléant vous devez d\'abord vaincre une certaine Mynerve en haut de la tour.\r\nquête Mise à l\'épreuve dofus\r\nquête Mise à l\'épreuve\r\nMontez les escaliers afin de rencontrer la Caporale Mynerve.\r\nquête Mise à l\'épreuve\r\nquête Mise à l\'épreuve\r\nAnnoncez alors à Mynerve que vous êtes ici afin de passer le test d\'aptitude.\r\nquête Mise à l\'épreuve\r\nMynerve vous dit alors que le test sera réussi si vous la battez.\r\nquête Mise à l\'épreuve\r\nquête Mise à l\'épreuve\r\nLe combat se lance et s\'effectue seul.\r\nquête Mise à l\'épreuve\r\nquête Mise à l\'épreuve\r\nCaporale Mynerve\r\nBourrasque : frappe du 10 dans l\'élément neutre en ligne sur une case ne poussant de 3 cases.\r\n \r\nUne fois vaincue, la Caporale vous apprend que vous êtes bon pour le service.\r\nquête Mise à l\'épreuve\r\nquête Mise à l\'épreuve\r\nFinalement le Capitaine vous donne votre première mission.', 3, 2),
(12, 'CHAMPS DE BATAILLE', 2127, 52, 'Incarnam [0,-4]', 'Le Capitaine vous apprend que des créatures non réincarnées errent dans Incarnam et qu\'il est de son but de les pousser à rejoindre le monde des vivants sans quoi Incarnam serait vite envahi.\r\nChamps de bataille dofus\r\nD’après le Capitaine, le seul moyen de convaincre les âmes à se réincarner et des leur cogner dessus. Il vous charge dans un premier temps de nettoyer un peu les champs d\'Incarnam.\r\nquete Champs de bataille\r\nquete Champs de bataille dofus\r\nAinsi il vous faut battre une créature de chaque espèce listée ci-dessous qui se trouvent dans la zone \"Champs\".\r\nChamps de bataille dofus\r\nChamps de bataille\r\nChamps de bataille\r\nUne fois le travail accompli, retournez auprès du Capitaine des Kerubims en [0,-4] afin de lui faire part de la réussite de votre mission.', 3, 2),
(13, 'COUPS D\'ÉPÉE DANS L\'EAU', 2867, 68, 'Incarnam [0,-4]', 'D\'après le Capitaine certains habitants se seraient plaints des Gloots. Il va donc vous falloir en vaincre quelques uns afin de les mettre en garde si ils continuent à attaquer les habitants.\r\nCoups d\'épée dans l\'eau dofus\r\nIl vous faut donc vaincre 2 Petits Gloots, 2 Plikplok et 1 Grand Splatch que vous pourrez dans la zone \"Lac\" de Incarnam.\r\nquete Coups d\'épée dans l\'eau dofus\r\nCoups d\'épée dans l\'eau\r\nCoups d\'épée dans l\'eau\r\nUne fois les indésirables vaincus, retournez auprès du Capitaine en [0,-4] afin de lui faire part de la résolution du problème.', 3, 2),
(14, 'DÉCIME-MOI DES BOUFTOUS', 3300, 84, 'Incarnam [0,-4]', 'Le Capitaine souhaite que vous poussiez maintenant les bouftous vers la réincarnation.\r\nquête Décime-moi des bouftous\r\nAinsi, il vous faut vaincre 1 bouftou de chaque race de la liste ci-dessous. Ils se trouvent dans la zone \"Pâturages\" d\'Incarnam.\r\nquête Décime-moi des bouftous dofus\r\nquête Décime-moi des bouftous\r\nDécime-moi des bouftous\r\n    Une fois les petites créatures vaincues, retournez auprès du Capitaine des Kerubims en [0,-4].', 3, 2),
(15, 'CHASSE AUX CHAPARDAMS', 4197, 102, 'Incarnam [0,-4]', 'Le Capitaine vous apprend que les Chapardams tourmentent les feux spirituels et qu\'il a peur qu\'ils prennent trop confiance en eux et que leur prochaine étape soit d’embêter les habitants.\r\nChasse aux chapardams dofus\r\nIl vous faut donc faire un peu peur aux chapardams en tuant 2 Ronronchons, 2 Tigrimas et 2 Chakrobats.\r\nquête Chasse aux chapardams dofus\r\nChasse aux chapardams\r\nChasse aux chapardams\r\nRetournez faire votre rapport au Capitaine des Kerubims en [0,-4]', 3, 2),
(16, 'LEÇON D\'HUMILITÉ', 4197, 102, 'Incarnam [0,-4]', 'Le Capitaine vous confie maintenant une tâche tout autre. Vous devez mettre hors d\'état de nuire une Osamodas qui s\'en prend aux aventuriers des environs.\r\nquete Leçon d\'humilité dofus\r\nVous trouverez Kruella Freuz en [1,0].\r\nquete Leçon d\'humilité\r\nLeçon d\'humilité dofus\r\nKruella vous menace de vous fouetter si vous ne partez pas rapidement.\r\nquete Leçon d\'humilité dofus\r\nDéfiez alors la fougueuse Osamodas.\r\nLeçon d\'humilité dofus\r\nLeçon d\'humilité dofus\r\nKruella Freuz\r\nLeçon d\'humilité\r\nSouffle Empoisonné : Frappe du 5 dans l\'élément neutre.\r\nInvocation de Kruella : Invoque un Bouftou.\r\nSouffle Motivant : Boost l\'invocation de 10 dommages pour 1 tour.\r\n\r\nSorts de l\'invocation :\r\nContusion : Frappe du 20 dans l\'élément neutre et met l\'état pesanteur pour 1 tour.\r\n \r\nUne fois l\'Osa vaincue, retournez auprès du Capitaine des Kerubims en [0,-4].\r\nLeçon d\'humilité\r\nLeçon d\'humilité\r\nAnnoncez lui alors une nouvelle fois le succès de votre mission.\r\n', 3, 2),
(17, 'DES CHAFERS QUI MARCHENT', 4733, 120, 'Incarnam [0,-4]', 'Parlez au Capitaine des Kerubims afin d\'obtenir une dernière mission.\r\nDes chafers qui marchent dofus\r\nLe Capitaine vous apprend que l\'endroit le plus dangereux d\'Incarnam est le cimetière car une malédiction a été jetée sur celui-ci. Cette malédiction permet de ramener les morts à la vie sous la forme d\'être que l\'on nomme chafers. Le Capitaine vous apprend que l\'un d\'entre eux à volé un sac de bijoux et que votre mission et de le récupérer.\r\nquête Des chafers qui marchent\r\nDes chafers qui marchent dofus\r\nVous devrez tuer un chafer de chaque espèce puis trouver le Tombeau de Percy Klop le voleur du sac de bijoux.\r\nDes chafers qui marchent\r\nDes chafers qui marchent\r\nDes chafers qui marchent\r\nDes chafers qui marchent\r\nLe Tombeau de Percy Klop se trouve en [4,1].\r\n\r\n \r\nEntrez dans le tombeau, cliquez sur la tombe et parlez à Percy Klop qui apparait sur la map afin de l\'attaquer.\r\nDes chafers qui marchent\r\nDes chafers qui marchent\r\nDes chafers qui marchent\r\nLe combat contre Percy Klop se lance.\r\nDes chafers qui marchent\r\nDes chafers qui marchent\r\nPercy Klop\r\nEstocrâme : Frappe du 10 dans l\'élément feu.\r\nCoup du Chafer : Frappe au CàC du 25 dans l\'élément terre.\r\nDes chafers qui marchent\r\nÀ la fin du combat, vous récupérez le Sac de Bijoux.\r\nRetournez alors auprès du Capitaine en [0,-4] pour li rendre le sac de bijoux et recevoir des remerciements.\r\nDes chafers qui marchent\r\nDes chafers qui marchent\r\nLa quête se termine alors et vous débloquez un succès.', 3, 2),
(18, 'PRODUITS NATURELS', 2127, 52, 'Incarnam [0,-3]', 'Parlez à Berb Nhin et demandez à en savoir plus sur lui.\r\nProduits naturels dofus\r\nBerb vous apprendra que pour porter le titre Fils d\'Incarnam, il vous faudra avoir servis dans la milice, connu de nombreux métiers, en bref avoir fait la majorité des quêtes présentent sur l\'île céleste. Berb se chargera alors d\'évaluer vos compétences en tant qu\'artisan.\r\nAinsi vous devrez lui fabriquer un pain d\'Incarnam, du goujon en tranche, du bouillon de chair et une potion de mini soin.\r\nquête Produits naturels dofus\r\nProduits naturels dofus\r\nquête Produits naturels\r\nBerb vous explique maintenant ou vous trouverez les différentes ressources permettant le craft des objets demandés. Il vous apprend notamment que la chair intangible se récupère sur les bouftous et tofus à conditions d\'avoir une arme de chasse qu\'il vous faudra fabriquer.\r\nquete Produits naturels dofus\r\nquête Produits naturels\r\nquête Produits naturels\r\nCommencez par vous rendre à l\'atelier des forgerons en [2,-4] avec les ressources indiquées ci-dessous du Couteau de Chasse.\r\nquête Produits naturels\r\nquête Produits naturels\r\nCouteau de Chasse\r\n3 x Poudre de Perlinpainpain.\r\n3 x Laine Céleste.\r\nEnfin une fois toutes les ressources en votre possession, cliquez sur l\'enclume pour forger votre couteau de chasse (il faudra l\'équiper pour obtenir les viandes mais plus tard dans le jeu vous verrez que vous pourrez transformer votre arme actuelle en arme de chasse).\r\nquête Produits naturels\r\nquête Produits naturels\r\n\r\nLes viandes se récupèrent sur les différents Bouftous de la zone Pâturages et sur le Tofu Chimérique des Champs (il faut néanmoins équiper votre couteau de chasse).\r\nLe blé se collecte un peu partout sur Incarnam mais surtout au Nord, le goujon se pêche dans le lac au Sud, les orties se récoltent un peu partout.\r\nListe total des ingrédients pour les recettes ci-dessous :\r\n4 x Blé.\r\n4 x Goujon.\r\n1 x Chair intangible.\r\n4 x Ortie.\r\nquête Produits naturels\r\nquête Produits naturels\r\nquête Produits naturels\r\nquête Produits naturels\r\nPhoto\r\nGoujon en Tranche\r\nProduits naturels\r\nProduits naturels\r\nUne fois les ressources en votre possession, il faut vous rendre à 4 ateliers différents pour effectuer vos crafts.\r\nquête Produits naturels\r\nEn [-1,-4], à l\'aide du four, vous pourrez cuire votre Pain d\'Incarnam.\r\nquête Produits naturels\r\nquête Produits naturels\r\nPhoto\r\nEn [-1,-3], à l\'aide de l\'Alambic, vous pourrez fabriquer votre Potion de mini soin.\r\nquête Produits naturels\r\nquête Produits naturels\r\nProduits naturels\r\nEn [-1,-2], à l\'aide du Plan de Travail, vous irez préparer du Bouillon de chair.\r\nquête Produits naturels\r\nquête Produits naturels\r\nProduits naturels\r\nEn [0,-1], le Plan de Travail vous permettra de fabriquer du Goujon en tranche.\r\nquête Produits naturels\r\nquête Produits naturels\r\nProduits naturels\r\nRamenez les bons petits produits fabriqués de vos propres mains en [0,-3].\r\nquête Produits naturels\r\nquête Produits naturels\r\nMontrez alors vos chefs d’œuvres à Berb Nhin.', 4, 2),
(19, 'LA HACHE ET LA PIOCHE', 2867, 68, 'Incarnam [0,-3]', 'Après avoir terminé la création de produits de la précédente quête, Berb vous confie une nouvelle quête.\r\nquête La hache et la pioche\r\nBerb vous demande maintenant de lui créer une planche agglomérée et de la ferrite. Pour ce faire il vous faudra utiliser vos talent de bûcheron et de mineur.\r\nquête La hache et la pioche dofus\r\nLa hache et la pioche dofus\r\nVoici les ressources nécessaires aux deux crafts.\r\nquete La hache et la pioche dofus\r\nplanche agglomérée dofus\r\n6 x Bois de Frêne.\r\n4 x Fer.\r\nferrite dofus\r\n6 x Fer.\r\n10 x Bois de Frêne.\r\nLe Frêne se récolte dans la zone de la Forêt mais peut être très convoité des aventuriers. (Peut aussi s\'acheter à l\'HDV des bûcherons en Astrub).\r\nLa hache et la pioche\r\nLa hache et la pioche\r\nLe Fer s\'obtient dans la mine d\'Incarnam dont l\'entrée est en [2,-4] (Vous pouvez aussi en acheter à l\'HDV mineur en Astrub).\r\nLa hache et la pioche\r\nLa hache et la pioche\r\nLa hache et la pioche\r\nLa hache et la pioche\r\nUne fois les ressources réunies il faut vous rendre dans deux ateliers différents :\r\nAtelier des mineurs en [2,-4].\r\nAtelier des Bûcherons en [2,-2].\r\n\r\n \r\nEn [2,-4], utilisez le Moule pour fondre vos matériaux et les transformer en Ferrite.\r\nLa hache et la pioche\r\nLa hache et la pioche\r\nLa hache et la pioche\r\nEn [2,-2], la Scie vous permettra de créer une belle planche agglomérée.\r\nLa hache et la pioche\r\nLa hache et la pioche\r\nLa hache et la pioche\r\nUne fois les deux objets créés, retournez auprès de Berb Nhin en [0,-3].\r\nLa hache et la pioche\r\nLa hache et la pioche\r\nMontrez alors le fruit de votre travail.', 4, 2),
(20, 'BOUNE UN JOUR, BOUNE TOUJOURS', 6660, 169, 'Incarnam [0,-3]', 'Annoncez à Berb que vous avez terminé la précédente quête.\r\nquête Boune un jour boune toujours\r\nBerb souhaite maintenant que vous fabriquiez une panoplie complète : la panoplie du Boune.\r\nquête Boune un jour boune toujours dofus\r\nBoune un jour boune toujours\r\nBoune un jour boune toujours\r\nBoune un jour boune toujours\r\nBoune un jour boune toujours\r\nBoune un jour, boune toujours\r\n3 x Feu Intérieur.\r\n5 x Fer.\r\nBoune un jour, boune toujours\r\n5 x Fer.\r\n3 x Cendres Éternelles.\r\nBoune un jour, boune toujours\r\n5 x Bave de Bouftou.\r\n3 x Cendres Éternelles.\r\nBoune un jour, boune toujours\r\n3 x Feu Intérieur.\r\n5 x Poudre de Perlinpainpain.\r\nBoune un jour, boune toujours\r\n3 x Feu Intérieur.\r\n5 x Ortie.\r\nBoune un jour, boune toujours\r\n5 x Ortie.\r\n3 x Cendres Éternelles.\r\nLes Cendres Éternelles se dropent à un taux de base de 50 à 54% sur les monstre situés sur la Route des âmes et ceux de la Forêt.\r\nBoune un jour, boune toujours\r\nBoune un jour, boune toujours\r\nBoune un jour, boune toujours\r\nBoune un jour, boune toujours\r\nLes Feus Intérieurs se dropent sur les créatures situées sur la Route des âmes à un taux de base de 50 à 54%.\r\nBoune un jour, boune toujours\r\nBoune un jour, boune toujours\r\nBoune un jour, boune toujours\r\n\r\n \r\nLa Bave de Bouftou et la Laine Céleste se dropent sur les différents Bouftous situées dans les Pâturages d\'Incarnam à un taux de base de 10 à 14%.\r\nBoune un jour boune toujours\r\nBoune un jour boune toujours\r\nBoune un jour boune toujours\r\nLa Poudre de Perlinpainpain se drop sur les créatures situées dans les Champs d\'Incarnam à un taux de base de 10 à 14%.\r\nBoune un jour boune toujours\r\nBoune un jour boune toujours\r\nBoune un jour boune toujours\r\nBoune un jour boune toujours\r\nBien entendu toutes les ressources peuvent être acheter dans les HDV.\r\nUne fois les ressources réunies, rendez-vous dans les deux différents ateliers qui vosu permettront de craft votre panoplie :\r\nL\'atelier des cordoniers et des tailleurs en [0,-2].\r\nL\'atelier des bijoutiers en [1,-4].\r\nBoune un jour boune toujours\r\nEn [0,-2], entrez dans l\'atelier des cordoniers et des tailleurs.\r\nAvec la machine à coudre, vous pourrez confectionner La Cape S\'loque et Le Floude.\r\nBoune un jour boune toujours\r\nBoune un jour, boune toujours\r\nBoune un jour, boune toujours\r\nAvec la Table de confection, vous pourrez créer Les Incrustes et La Spamette.\r\nBoune un jour boune toujours\r\nBoune un jour, boune toujours\r\nBoune un jour, boune toujours\r\nBoune un jour boune toujours\r\nRendez-vous maintenant à l\'atelier des bijoutiers situé en [1,-4].\r\nGrâce à l\'atelier vous pourrez alors craft Le S\'Mesme et Le Plussain.\r\nBoune un jour boune toujours\r\nBoune un jour, boune toujours\r\nBoune un jour, boune toujours\r\nUne fois la panoplie complète craftée, retournez voir Berb en [0,-3].\r\nBoune un jour boune toujours\r\nBoune un jour boune toujours\r\nMontrez alors vos talents dans les différents métiers effectués à Berb.', 4, 2),
(21, 'LE CHOIX DES ARMES', 4197, 102, 'Incarnam [0,-3]', 'Berb vous félicite pour les items craftés lors de la précédente quête et vous donne alors une nouvelle et dernière quête.\r\nLe choix des armes dofus\r\nBerb vous dit qu\'en tant qu\'aventurier il vous faut une bonne arme qu\'il sera possible de créer à l\'aide d\'un sculpteur ou d\'un forgeron. Il vous demande donc de commencer à apprendre les bases de ces deux métiers en créant vos propres armes qui seront une Hachette de Bûcheron et une Demi-Baguette.\r\nPar la même occasion il vous demande de créer une clef de la Crypte de Kardorim grâce au métier de Bricoleur.\r\nquête Le choix des armes dofus\r\nLe choix des armes dofus\r\nquête Le choix des armes dofus\r\nVoici les recettes des différents objets à craft ainsi que l\'explication pour obtenir les différentes ressources.\r\nLe choix des armes\r\nLe choix des armes\r\n2 x Pain d\'Incarnam (4 x Blé pour 1 Pain).\r\n3 x Bois de Frêne.\r\n3 x Queue de Chapardam.\r\nle choix des armes\r\n5 x Fer.\r\n5 x Laine Céleste.\r\nLe choix des armes\r\n3 x Relique d\'Incarnam.\r\n5 x Cendres Éternelles.\r\nLes Cendres Éternelles se droopents à un taux de base de 10 à 14% sur les monstres de la Route des âmes ou de la Forêt d\'Incarnam.\r\nLe choix des armes\r\ncendres éternelles Le choix des armes\r\nLe choix des armes\r\nLe choix des armes\r\nLes Reliques d\'Incarnam se dropent sur les différents chafers situés dans le Cimetière d\'Incarnam à un taux de base de 10 à 14 %.\r\nLe choix des armes\r\nLe choix des armes\r\nLes Queues de Chapardams se dropent sur les monstres de la Forêt d\'Incarnam à un taux de base de 50 à 54%.\r\nLe choix des armes\r\nLe choix des armes\r\nLe choix des armes\r\nLes Laines Célestes se dropent à un taux de base de 50 à 54% sur les différents bouftous présents dans les Pâturages.\r\nLe choix des armes\r\nLe choix des armes\r\nLe choix des armes\r\n\r\n \r\nLe choix des armes\r\nIl vous faudra alors craft vos 3 items dans trois ateliers différents :\r\nL\'atelier des bricoleurs en [1,-2].\r\nL\'atelier des sculpteurs en [2,-2].\r\nL’atelier des forgerons en [2,-4].\r\nEn [2,-2], grâce à l’Établi, vous pourrez confectionner votre Demi-Baguette.\r\nLe choix des armes\r\nLe choix des armes\r\nLe choix des armes\r\nEn [1,-2], vous pourrez créer la clef de la Crypte de Kardorim.\r\nLe choix des armes\r\nLe choix des armes\r\nLe choix des armes\r\nEn [2,-4], grâce à l\'Enclume vous pourrez forger une Hachette de Bûcheron.\r\nLe choix des armes\r\nLe choix des armes\r\nLe choix des armes\r\nUne fois les différents items craftés, retournez voir Berb en [0,-3].\r\nLe choix des armes\r\nLe choix des armes\r\nMontrez alors à l\'enutrof ce que vous avez fabriqué.\r\nLe choix des armes\r\nBerbe vous félicite et vous dit que si vous continuez à aider les habitants d\'Incarnam de la sorte vous pourrez devenir le Fils d\'Incarnam.', 4, 2),
(22, 'LA GALETTE SECRÈTE', 3330, 84, 'Incarnam [1,-2]', 'Parlez à Anta Brok qui vous apprend avoir fais par un moment du troc avec les aventuriers. Cependant elle c\'est reconvertie et aide désormais sa sœur Hollie à développer son commerce dans les environs.\r\nLa galette secrète dofus\r\nAnta vous apprend ne pas savoir cuisiner et que ça sœur l\'a mise au défi de réaliser un dessert qui soit mangeable. Elle vous demande alors de l\'aider et vous fourni la recette de ce qu\'elle veut faire.\r\nLa galette secrète dofus\r\nquête La galette secrète dofus\r\nLa galette secrète\r\nLa recette est secrète, il vous faudra :\r\n10 x Blé.\r\n4 x Poudre de Perlinpainpain.\r\n2 x Oeuf de Tofu.\r\n1 x Laitlait.\r\n4 x Cendres Éternelles.\r\n4 x Bave de Bouftou.\r\n﻿ATTENTION ﻿: Consultez la recette présente dans votre inventaire de quête avant de craft votre galette sinon la quête ne se mettra pas à jour. Si vous craftez votre galette avant de consulter la recette il vous faudra alors consulter la recette et craft une nouvelle fois la galette !\r\nLa galette secrète\r\nla galette secrète\r\nMerci à Pantalemon (Hecate) pour le screen de la recette.\r\nLa galette secrète\r\nLe blé se récolte essentiellement au Nord d\'Incarnam.\r\nLa Poudre de Perlinpainpain se drop sur les monstres situés dans les Champs à un taux de base allant de 10 à 14% (sauf Tofus).\r\nLa galette secrète\r\nPhotoLa galette secrète\r\nLa galette secrète\r\nL\'Oeuf de Tofu se drop sur le Tofu Chimérique présent dans les Champs à un taux de base de 10 à 14 %.\r\nLa galette secrète\r\nLa galette secrète\r\nLa galette secrète\r\nRendez-vous à la Taverne du coin en [0,-3] pour acheter du Lailait.\r\nGrobid vous vendra du Lailait pour 4 kamas.\r\nLa galette secrète\r\nLa galette secrète\r\nLes Cendres Éternelles se dropent dans la Forêt d\'Incarnam à un taux de base de 50 à 54%.\r\nLa galette secrète\r\nLa galette secrète\r\nLa galette secrète\r\nLes Baves de Bouftou se dropent à un taux de bas ed e50 à 54% dans les Pâturages d\'Incarnam sur les différents Bouftous.\r\nLa galette secrète\r\nLa galette secrète\r\nLa galette secrète\r\nUne fois les ressources obtenues ou achetées en HDV, rendez-vous à l\'atelier des Paysans en [-1,-4].\r\nLa galette secrète\r\nLa galette secrète\r\n\r\n \r\nPlacez correctement les ingrédients de la recette dans l\'atelier de craft (atelier : cuire) (l\'objet ne s\'affichera pas car c\'est une recette secrète) puis cliquez sur fusionner (si par malheur vous vous trompez dans la recette, vous ne perdrez pas les ingrédients).\r\nLa galette secrète\r\nGalette d\'Incarnam\r\n10 x Blé.\r\n4 x Poudre de Perlinpainpain.\r\n2 x Oeuf de Tofu.\r\n1 x Laitlait.\r\n4 x Cendres Éternelles.\r\n4 x Bave de Bouftou.\r\nRamenez maintenant la Galette à Anta Brok qui se trouve toujours en [1,-2].\r\nLa galette secrète\r\nLa galette secrète\r\nAnta souhaite y rajouter de la confiture. Il faut donc aller en chercher à Pipelette qui sait en fabriquer de la très bonne d\'après Anta.\r\nLa galette secrète\r\nLa galette secrète\r\nPipelette se trouve en [2,-3].\r\nLa galette secrète\r\nLa galette secrète\r\nParlez alors à la vieille Pipelette.\r\nLa galette secrète\r\nPipelette accepter de vous donner un pot de confiture contre des orties.\r\nLa galette secrète\r\nLa galette secrète\r\nIl vous faudra collecter 5 x Ortie que l\'on trouve un peu partout dans Incarnam.\r\nLa galette secrète\r\nLa galette secrète\r\nReparlez alors à Pipelette afin d\'obtenir le Pot de Confiture.\r\nLa galette secrète\r\nDonnez les Orties que Pipelette vous a demandés.\r\nLa galette secrète\r\nLa galette secrète\r\nLa galette secrète\r\npot de confiture maison\r\nVous obtenez alors un Pot de Confiture Maison dans votre inventaire de quêtes.\r\nRapportez ce dernier à Anta Brok en [1,-2].\r\nLa galette secrète\r\nLa galette secrète\r\nDonnez le Pot de confiture à la jeune Anta.\r\nLa galette secrète\r\nCelle-ci décide alors de goûter la confiture qui semble écœurante. Goutez la vous aussi pour constater que son gout est horrible. Finalement Anta vous laisse la confiture et garde juste la galette.\r\nLa galette secrète\r\nLa galette secrète\r\nLa galette secrète\r\nEn ayant gouté la confiture, vous obtenez une malédiction : la Nausée et vous devenez tout vert jusqu’à ce que vous fassiez 1 combat.', 5, 2),
(23, 'MORT AU RAT !', 3330, 84, 'Incarnam [0,-3]', 'Sur l\'une des façades de la Taverne, vous pourrez remarquer une Offre d\'emploi qui cherche un dératiseur. Cliquez pour accepter l\'offre.\r\nMort au rat dofus\r\nquete Mort au rat dofus\r\nEntrez alors dans la Taverne.\r\nMort au rat !\r\nMort au rat !\r\nParlez à Grobid et achetez lui une limonade pour 1 kama (utile pour la suite de la quête).\r\nMort au rat !\r\nMort au rat !\r\nMort au rat !\r\nVous obtenez alors une Limonade d\'Incarnam dans votre inventaire de quête.\r\n\r\n \r\nDescendez maintenant à la cave, ciblez la tireuse avec la limonade acheté précédemment et cliquez sur la \"tireuse\".\r\nMort au rat !\r\nMort au rat !\r\nUn Rat Soiffé sort alors de sa cachette.\r\nMort au rat !\r\nIl vous faut alors lancer un combat contre le Rat Soiffé.\r\nMort au rat !\r\nMort au rat !\r\nRat soiffé\r\nMordillage : Frappe du 10 dans l’élément neutre seulement au CàC.\r\nRemontez au rez de chaussé et annoncez à Grobid que vous l\'avez débarrassé du rat.', 5, 2),
(24, 'CRYPTOLOGIE', 11473, 280, ' Incarnam [5,-1]', 'Pour cette quête il vous suffit d\'effectuer la Crypte de Kardorim en utilisant votre trousseau ou une clef.\r\nCryptologie dofus\r\nquete Cryptologie dofus\r\nCryptologie\r\nIl vous faut donc finir le donjon et parler à Kardorim avant de sortir.\r\nAvant de quitter le donjon, demandez à Kardorim qui il est.\r\nCryptologie\r\nIl vous apprend alors avoir été le capitaine de la milice céleste mais qu\'une fois mort la malédiction du cimetière l\'a ramené de l\'au-delà. Kardorim vous apprend qu\'il essaye de discipliner les autres chafers et qu’un jour peut être les morts et les vivants pourront coexister.', 5, 2),
(25, 'UN PEU DE PIGMENT', 2867, 68, ' Incarnam [3,-5]', 'Parlez à Marylork afin d\'en savoir plus sur lui.\r\nUn peu de pigment dofus\r\nMarylork n\'a plus de Gouache verte pour peindre, il faut donc que vous lui rameniez de la poudre d\'Aminite.\r\nquete Un peu de pigment dofus\r\nUn peu de pigment\r\nLa Poudre d\'Aminite se drop à un taux de 40 à 44% sur les Aminites présents dans la Mine d\'Incarnam dont l\'entrée se situe en [2,-4].\r\nLe drop ne peut être provoqué que si vous avez lancé la quête et il vous faudra en drop trois.\r\nUn peu de pigment\r\nUn peu de pigment\r\nUn peu de pigment\r\nEntrez dans la mine en [2,-4].\r\nUn peu de pigment\r\nUne fois les poudres collectées, ramenez les a Marylork en [3,-5] qui vous remerciera.', 5, 2);

-- --------------------------------------------------------

--
-- Structure de la table `people`
--

CREATE TABLE `people` (
  `id_people` int(5) NOT NULL,
  `pe_name` varchar(20) NOT NULL,
  `pe_email` varchar(50) NOT NULL,
  `pe_lvl` int(3) NOT NULL,
  `pe_login` varchar(50) NOT NULL,
  `pe_password` varchar(100) NOT NULL,
  `pe_status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `people`
--

INSERT INTO `people` (`id_people`, `pe_name`, `pe_email`, `pe_lvl`, `pe_login`, `pe_password`, `pe_status`) VALUES
(2, 'Marylork', 'marylork@ankama.dofus', 35, 'marylork@ankama.dofus', '$2b$10$i8jYkKmQv7bI8Se9jtMnAev92VWQ/XATEWqqx7SvSghiVUWTiWjIO', 'recruiter'),
(4, 'Ganymède', 'ganymede@anakam.dofus', 20, 'ganymede@anakam.dofus', '$2b$10$oeGwrnXf1sNaUpPRPJTqnudTD3j6QGZ3dl1g1/O/HVXnpwEfS1Bi2', 'recruiter'),
(11, 'Berb Nhin', 'berbnhin@anakam.dofus', 25, 'berbnhin@anakam.dofus', '$2b$10$LWN.nwZNYZvSb3M3WY8/oOMrqKfKjB/6EJiyvhWohlqO2qXhCNeqe', 'recruiter'),
(12, 'Lykhen', 'lykhen@anakam.dofus', 20, 'lykhen@anakam.dofus', '$2b$10$oaBF/Qc44chOgdWQgf7JkuCRvPfPoGMdQ3amUtFXLW0pwq/kP0bjm', 'recruiter'),
(13, 'Fécaline', 'fecaline@anakam.dofus', 30, 'fecaline@anakam.dofus', '$2b$10$qbxgVQ/fnrvBBMLtSHr.medSe0B7n/ZbTMV5VAxLKQrR8AwoJQGXy', 'recruiter'),
(14, 'test', 'test@ankama.dofus', 1, 'test@ankama.dofus', '$2b$10$kbQ5bMieyciQeupvIW8JY.TwKyI1dJkADX3S4QDOIEXHkXBsy7icS', 'administrator'),
(15, 'Capitaine Kerubi', 'capt.kerubi@ankama.dofus', 35, 'capt.kerubi@ankama.dofus', '$2b$10$tq1rOb3pgM57jyNMcHf1kOLh3fLaIpkrrDTnyXwZNJZnN6HVohJIm', 'recruiter');

-- --------------------------------------------------------

--
-- Structure de la table `recruiter`
--

CREATE TABLE `recruiter` (
  `id_recruiter` int(11) NOT NULL,
  `re_id_company` int(5) NOT NULL,
  `re_id_people` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `recruiter`
--

INSERT INTO `recruiter` (`id_recruiter`, `re_id_company`, `re_id_people`) VALUES
(3, 5, 2),
(4, 3, 15),
(5, 4, 11);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `application`
--
ALTER TABLE `application`
  ADD PRIMARY KEY (`id_application`),
  ADD KEY `application1` (`ap_id_job_offer`);

--
-- Index pour la table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id_company`);

--
-- Index pour la table `job_offer`
--
ALTER TABLE `job_offer`
  ADD PRIMARY KEY (`id_job_offer`),
  ADD KEY `company` (`jo_id_company`),
  ADD KEY `recruiter` (`jo_recruiter`);

--
-- Index pour la table `people`
--
ALTER TABLE `people`
  ADD PRIMARY KEY (`id_people`);

--
-- Index pour la table `recruiter`
--
ALTER TABLE `recruiter`
  ADD PRIMARY KEY (`id_recruiter`),
  ADD KEY `recruiter1` (`re_id_company`),
  ADD KEY `recruiter2` (`re_id_people`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `application`
--
ALTER TABLE `application`
  MODIFY `id_application` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `company`
--
ALTER TABLE `company`
  MODIFY `id_company` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `job_offer`
--
ALTER TABLE `job_offer`
  MODIFY `id_job_offer` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT pour la table `people`
--
ALTER TABLE `people`
  MODIFY `id_people` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT pour la table `recruiter`
--
ALTER TABLE `recruiter`
  MODIFY `id_recruiter` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `application`
--
ALTER TABLE `application`
  ADD CONSTRAINT `application1` FOREIGN KEY (`ap_id_job_offer`) REFERENCES `job_offer` (`id_job_offer`);

--
-- Contraintes pour la table `job_offer`
--
ALTER TABLE `job_offer`
  ADD CONSTRAINT `company` FOREIGN KEY (`jo_id_company`) REFERENCES `company` (`id_company`),
  ADD CONSTRAINT `recruiter` FOREIGN KEY (`jo_recruiter`) REFERENCES `people` (`id_people`);

--
-- Contraintes pour la table `recruiter`
--
ALTER TABLE `recruiter`
  ADD CONSTRAINT `recruiter1` FOREIGN KEY (`re_id_company`) REFERENCES `company` (`id_company`),
  ADD CONSTRAINT `recruiter2` FOREIGN KEY (`re_id_people`) REFERENCES `people` (`id_people`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
