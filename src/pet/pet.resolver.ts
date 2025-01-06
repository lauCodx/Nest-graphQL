import { Query, Resolver } from '@nestjs/graphql';
import { PetService } from './pet.service';
import { Pet } from './pet.entity';

@Resolver(of => Pet)
export class PetResolver {
    constructor(private petService: PetService){}
    
    @Query(returns => [Pet])
    pets(): Promise<Pet[]> {
        return this.petService.findAll()
    }


}
