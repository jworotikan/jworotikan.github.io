CREATE VIEW vwresultSLE
AS
select `a`.`id` AS `id`,
`a`.`usrName` AS `userName`,
(select count(0) from `dbSLEAnsw` where ((`dbSLEAnsw`.`userId` = `a`.`id`) and (`dbSLEAnsw`.`leftAsw` = '1'))) AS `l1`,
(select count(0) from `dbSLEAnsw` where ((`dbSLEAnsw`.`userId` = `a`.`id`) and (`dbSLEAnsw`.`leftAsw` = '2'))) AS `l2`,
(select count(0) from `dbSLEAnsw` where ((`dbSLEAnsw`.`userId` = `a`.`id`) and (`dbSLEAnsw`.`leftAsw` = '3'))) AS `l3`,
(select count(0) from `dbSLEAnsw` where ((`dbSLEAnsw`.`userId` = `a`.`id`) and (`dbSLEAnsw`.`leftAsw` = '4'))) AS `l4`,
(select count(0) from `dbSLEAnsw` where ((`dbSLEAnsw`.`userId` = `a`.`id`) and (`dbSLEAnsw`.`rightAsw` = '1'))) AS `r1`,
(select count(0) from `dbSLEAnsw` where ((`dbSLEAnsw`.`userId` = `a`.`id`) and (`dbSLEAnsw`.`rightAsw` = '2'))) AS `r2`,
(select count(0) from `dbSLEAnsw` where ((`dbSLEAnsw`.`userId` = `a`.`id`) and (`dbSLEAnsw`.`rightAsw` = '3'))) AS `r3`,
(select count(0) from `dbSLEAnsw` where ((`dbSLEAnsw`.`userId` = `a`.`id`) and (`dbSLEAnsw`.`rightAsw` = '4'))) AS `r4`,
`a`.`usrStatus` AS `usrStatus`
from `dbmUsersReg` `a`;