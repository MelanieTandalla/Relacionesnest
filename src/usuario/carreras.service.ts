import { Delete, Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CarrerasEntity } from './entities/carreras.entity';
import { CarrerasDto } from './dto/carreras.dto';
import { UpdatecarrerasDto } from './dto/update-carreras.dto';


@Injectable()
export class CarrerasService {
  constructor (@InjectRepository(CarrerasEntity) private carrerasRepository: Repository<CarrerasEntity>){}

  async create(carrerasDto: CarrerasDto):Promise<CarrerasEntity> {
    const carreras: CarrerasEntity = await this.carrerasRepository.save(carrerasDto);
        return carreras;
        //se guada en la bd la variable que se crea en la variable de la funcion
  }

  async findAll() :Promise<CarrerasEntity [] >{
    const carreras: CarrerasEntity [] = await this.carrerasRepository.find();
        return carreras;
  }

  async findOne(id: string) :Promise<CarrerasEntity> {
    const carreras: CarrerasEntity = await this.carrerasRepository.findOneBy({id});
        return carreras;
  }

  async update(id: string, updatecarreras: UpdatecarrerasDto) :Promise<UpdateResult | undefined> {
    const carreras: UpdateResult = await this.carrerasRepository.update(id, updatecarreras);
        return carreras;
  }

  async remove(id: string) :Promise<DeleteResult | undefined> {
    const carreras: DeleteResult = await this.carrerasRepository.delete(id);
        return carreras;
  }
}