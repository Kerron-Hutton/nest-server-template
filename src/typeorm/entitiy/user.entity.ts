import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryColumn({ generated: 'increment' })
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ length: 60, name: 'first_name' })
  firstName: string;

  @Column({ length: 60, name: 'last_name' })
  lastName: string;

  @Column({ name: 'date_of_birth', type: 'date' })
  dateOfBirth: Date;
}
