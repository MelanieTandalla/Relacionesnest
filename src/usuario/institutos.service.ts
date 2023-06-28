import { Delete, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InstitutosEntity } from './entities/instituto.entity';
import { InstitutosDto } from './dto/instituto.dto';
import { UpdateInstitutosDto } from './dto/update-instituto.dto';


@Injectable()
export class institutosService {
  constructor (@InjectRepository(InstitutosEntity) private institutosRepository: Repository<InstitutosEntity>){}

  async create(institutosDto: InstitutosDto):Promise<InstitutosEntity> {
    const institutos: InstitutosEntity = await this.institutosRepository.save(institutosDto);
        return institutos;
  }

  async findAll() :Promise<InstitutosEntity [] >{
    const institutos: InstitutosEntity [] = await this.institutosRepository.find();
        return institutos;
  }

  async findOne(id: string) :Promise<InstitutosEntity> {
    const institutos: InstitutosEntity = await this.institutosRepository.findOneBy({id});
        return institutos;
  }

  async update(id: string, updateinsitutos: UpdateInstitutosDto) :Promise<UpdateResult | undefined> {
    const institutos: UpdateResult = await this.institutosRepository.update(id, updateinsitutos);
        return institutos;
  }

  async remove(id: string) :Promise<DeleteResult | undefined> {
    const institutos: DeleteResult = await this.institutosRepository.delete(id);
    /*if (institutos) {
        return institutos;
    } else {
        throw new Error('El Instituto no se pudo borrar')
    }*/
        return institutos;
  }
}