import { IPosition, IPositionRequest } from '../components/positions/IPosition';
import { api } from './api';

const API_URL = `${import.meta.env.VITE_API_URL}/registers/positions`;

export async function getPositions(): Promise<IPosition[]> {
  const positions: IPosition[] = [];
  const { items: positionsItems } = await api.get(API_URL)

  if (positionsItems) {
    const receivedPositions = positionsItems.map((position: any) => ({
      id: position.id,
      name: position.name,
    }));

    positions.push(...receivedPositions);
  }

  return positions;
}

export async function createPosition(position: IPositionRequest): Promise<IPosition> {
    validatePosition(position);
    const payload = {
      name: position.name,
    }
    const item = await api.post(API_URL, payload);

    return {
      id: item.id,
      name: item.name,
      description: item.description,
      groupId: item.groupId,
    };
}

function validatePosition(position: IPositionRequest) {
    const { name } = position;

    if (!name) {
      throw new Error('O campo nome é obrigatório');
    }
}