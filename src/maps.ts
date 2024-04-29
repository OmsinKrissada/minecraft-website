export const maps: {
  name: string;
  web?: string;
  web3d?: string;
  native_version: string;
  active: boolean;
  download?: string;
  archived_at?: string;
}[] = [
  {
    name: 'Create 2023',
    // web: 'https://mc.krissada.com/map/survival_2023/',
    web3d: 'https://mc.krissada.com/3dmap/create-2023/',
    native_version: 'Forge 1.20.1',
    active: false,
  },
  {
    name: 'Sua 2023',
    web: 'https://mc.krissada.com/map/survival_2023/',
    web3d: 'https://mc.krissada.com/3dmap/survival_2023/',
    native_version: '1.20.1',
    active: false,
  },
  {
    name: 'Bonus 2022 - 2023',
    web: 'https://mc.krissada.com/map/bo_2022/',
    web3d: 'https://mc.krissada.com/3dmap/bo_2022/',
    native_version: '1.19.4',
    active: false,
    // download: 'https://mc.krissada.com/archive/bo_2022_2023-06-24.zip',
    archived_at: '2023-06-24',
  },
  {
    name: 'Omsin 2022',
    web: 'https://mc.krissada.com/map/survival_2022/',
    native_version: '1.18.1',
    active: false,
    // download: 'https://mc.krissada.com/archive/survival_2022_2023-02-05.zip',
    archived_at: '2023-02-05',
  },
  {
    name: 'Omsin 2020 - 2021',
    web: 'https://mc.krissada.com/map/survival_2020/',
    native_version: '1.17.1',
    active: false,
    // download: 'https://mc.krissada.com/archive/survival_2020_2023-02-20.zip',
    archived_at: '2023-02-20',
  },
];
