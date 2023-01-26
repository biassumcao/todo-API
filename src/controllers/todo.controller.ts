import { FastifyRequest, FastifyReply} from 'fastify';
import TodoService from '../services/todo.service';
import { ITodo } from '../types/todo.type';

export const create = async (req: FastifyRequest<{Body: ITodo}>, res: FastifyReply): Promise<FastifyReply> => {
  const response = await TodoService.create(req.body);
  return res.status(200).send(response);
};

export const findOne = async (req: FastifyRequest<{Params: {id: string}}>, res: FastifyReply): Promise<FastifyReply> => {
  const response = await TodoService.findOne(String(req.params.id));
  return res.status(200).send(response);
};

export const update = async (req: FastifyRequest<{Body: ITodo, Params: {id: string}}>, res: FastifyReply): Promise<FastifyReply> => {
  const response = await TodoService.update(req.params.id, req.body.name);
  return res.status(200).send(response);
};

export const deleteOne = async (req: FastifyRequest<{Params: {id: string}}>, res: FastifyReply): Promise<FastifyReply> => {
  const response = await TodoService.delete(req.params.id);
  return res.status(200).send(response);
};

export const findAll = async (req: FastifyRequest, res: FastifyReply): Promise<FastifyReply> => {
  const response = await TodoService.findAll();
  return res.status(200).send(response);
}