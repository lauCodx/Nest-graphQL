import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PetService } from './pet.service';
import { Pet } from './pet.entity';
import { CreatePetInput } from './dto/create-pet.input';

@Resolver(of => Pet)
export class PetResolver {
    constructor(private petService: PetService){}
    
    @Query(returns => Pet)
    getPet(@Args('id', {type: () => Int}) id: number): Promise<Pet>{
        return this.petService.findOne(id)
    }

    @Query(returns => [Pet])
    pets(): Promise<Pet[]> {
        return this.petService.findAll()
    }

    @Mutation(returns => Pet)
    createPet(@Args('createPetInput') createPetInput: CreatePetInput): Promise<Pet>{
        return this.petService.createPet(createPetInput)
    }


}
