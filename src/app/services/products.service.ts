
import { Injectable } from '@angular/core';


const domain = "https://result.school/"

export enum ProductType {
  Skill = 'skill',
  Intensive = 'intensive',
  Course = 'course'
}

export interface IProduct {
  id: string;
  text: string;
  title: string;
  link: string;
  image: string;
  time: string;
  type: ProductType;
}

function addDomainToLinkAndImage(product: IProduct) {
  return {
    ...product,
    image: domain + product.image,
    link: domain + product.link,
  }
}
const products: IProduct[] = [
  {
    id: '29',
    title: 'TypeScript',
    link: '/products/typescript',
    image: "/img/icons/products/icon-ts.svg",
    text: "basic, generic,utils, classes",
    time: "two weeks",
    type: ProductType.Skill

  },
  {
    id: '30',
    title: 'React.js',
    link: '/products/react',
    image: '/img/icons/products/icon-react.svg',
    text: 'components, hooks, context',
    time: 'three weeks',
    type: ProductType.Skill
  },
  {
    id: '31',
    title: 'Vue.js',
    link: '/products/vue',
    image: '/img/icons/products/icon-vue.svg',
    text: 'components, directives, transitions',
    time: 'three weeks',
    type: ProductType.Skill
  },
  {
    id: '32',
    title: 'Angular',
    link: '/products/angular',
    image: '/img/icons/products/icon-angular.svg',
    text: 'components, services, routing',
    time: 'four weeks',
    type: ProductType.Skill
  },
  {
    id: '33',
    title: 'Node.js',
    link: '/products/node',
    image: '/img/icons/products/icon-node.svg',
    text: 'Express.js, RESTful APIs, MongoDB',
    time: 'four weeks',
    type: ProductType.Skill
  },
  {
    id: '34',
    title: 'HTML & CSS',
    link: '/products/html-css',
    image: '/img/icons/products/icon-git.svg',
    text: 'semantic markup, flexbox, grid layout',
    time: 'two weeks',
    type: ProductType.Skill
  },
  {
    id: '35',
    title: 'JavaScript',
    link: '/products/javascript',
    image: '/img/icons/products/icon-state-managers.svg',
    text: 'ES6 features, DOM manipulation, async programming',
    time: 'three weeks',
    type: ProductType.Skill
  }
]


@Injectable({
  providedIn: "root",
})

export class ProductService {
  readonly products: IProduct[] = products.map(addDomainToLinkAndImage)

  getById(id: string) {
    return this.products.find(product => product.id === id)
  }

  get byGroup() {
    return this.products.reduce((group, prod) => {
      if (!group[prod.type]) {
        group[prod.type] = [];
      }
      group[prod.type].push(prod)
      return group;
    }, {})
  }

}