create database bdmuseu;
use bdmuseu;

create table artista(
	idArtista int not null primary key auto_increment,
    nomeArtista varchar(70)
);

CREATE TABLE obra (
  idObra int NOT NULL primary key auto_increment,
  nomeObra varchar(50) NOT NULL unique,
  dataObra date,
  descricaoObra varchar(300) NOT NULL,
  urlObra varchar(300) NOT NULL,
  ArtistaDaObra integer,
  CONSTRAINT fk_ArtObra FOREIGN KEY (ArtistaDaObra) REFERENCES artista (idArtista)
);

insert into artista value 
( null, 'Frida Khalo'),
( null, 'Pablo Naruda'),
( null, 'Salvador Allende'),
( null, 'Anita Malfatti');

insert into obra values (null, 'picasso', '30-05-2003', 'linda', 'https://image.com', 1);
insert into obra values (null, 'Picassos', '2022-06-07', 'https://image.com', 'fdsfsdf', 1);

ALTER TABLE artista ADD COLUMN IdDoArtista int primary key not null auto_increment FIRST;
    
ALTER TABLE artista DROP COLUMN idArtista;

select * from artista;
select idObra, nomeObra, DATE_FORMAT(dataObra, '%d/%m/%Y') as dataObra, descricaoObra, urlObra from obra where ArtistaDaObra = 1;


DELETE FROM artista WHERE idArtista=1;
DELETE FROM obra WHERE idObra=4;


