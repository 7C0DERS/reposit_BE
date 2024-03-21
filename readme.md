::inital setup for sequelize::
first change your host in config folder
add env file and put your envoirnment add passowrd in env file


:: for creating DB comments::
1.npx sequelize-cli db:create 
:: for creating Tables comments::
2.npx sequelize-cli model:generate --name <your Table Name> --attributes coulumnName:coloumnType,coulumnName:coloumnType,coulumnName:coloumnType,coulumnName:coloumnType

this will create a migration file 

:: table creation in db comments ::

3.npx sequelize-cli db:migrate -- for creating
npx sequeliize-cli db:migrate:undo -- for undoing last migration
npx sequelize-cli db:migrate:undo:all -- for undoing all migrations
