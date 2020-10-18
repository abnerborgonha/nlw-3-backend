import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Orphanage from './Orphanage';

/*
 Com os decorations podemos referenciar que a estrutura de dados 
 está sendo referenciada ao typeORM.  
*/

@Entity('images')
export default class Image {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Orphanage, orphanage => orphanage.images)
  @JoinColumn({name: 'orphanage_id'})
  orphanage: Orphanage
}