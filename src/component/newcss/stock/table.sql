create table stock(
    idstock serial primary key,
    idarticle varchar(200) references article(id),
    idunitee_article varchar(200) references  article_unitee(id),
    qt int,
    pttcf numeric(18,2),
    idtypemouvement varchar(200) references typemouvement(id),
    idref int references stock(idstock),
    rest json,
    idetat_article varchar(200) references idetat(id),
    idfournisseur varchar(200) references fournisseur(id),
    idclient varchar(200) references client(id),
    idannex varchar(200) references annex(id),
    idmagasin varchar(200) references magasin(id),
    idutilisateur varchar(200) references utilisateur(id),
    date timestamp,
    idetat_facture varchar(200) references etat_facture(id)
);
ALTER TABLE stock
ADD COLUMN idboncommande varchar(200) references commande_frns_datefinpayement(id);
