import { IGroup, IGroupRequest } from '../components/positions/IGroup';
import { api } from './api';

const API_URL = `${import.meta.env.VITE_API_URL}/registers/groups`;

export async function getGroups(): Promise<IGroup[]> {
    const groups: IGroup[] = [];
    const { items: groupsItems } = await api.get(API_URL)

    if (groupsItems) {
      const receivedGroups = groupsItems.map((group: any) => ({
        id: group.id,
        name: group.name,
      }));

      groups.push(...receivedGroups);
    }
    
    return groups;
}

export async function createGroup(group: IGroupRequest): Promise<IGroup> {
    validateGroup(group);
    const payload = {
      name: group.name,
    }
    const item = await api.post(API_URL, payload);

    return {
      id: item.id,
      name: item.name,
    };
}

function validateGroup(group: IGroupRequest) {
    const { name } = group;

    if (!name) {
      throw new Error('O campo nome é obrigatório');
    }
}