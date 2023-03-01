import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://registry.npmjs.com/-/v1'
})

export interface Links {
    npm: string;
    homepage: string;
    repository: string;
    bugs: string;
}

export interface Publisher {
    username: string;
    email: string;
}

export interface Maintainer {
    username: string;
    email: string;
}

export interface Package {
    name: string;
    version: string;
    description: string;
    keywords: string[];
    date: Date;
    links: Links;
    publisher: Publisher;
    maintainers: Maintainer[];
}

export interface Detail {
    quality: number;
    popularity: number;
    maintenance: number;
}

export interface Score {
    final: number;
    detail: Detail;
}

export interface PackageObject {
    package: Package;
    score: Score;
    searchScore: number;
}

export interface IFetchPackagesParams {
    text: string
    size: number
    from: number
}

export interface IFetchPackagesResponse {
    objects: PackageObject[];
    total: number;
    time: string;
}

export async function fetchPackages(params: IFetchPackagesParams) {
    const response = await instance.get<IFetchPackagesResponse>('search', { params })
    return response.data
}
