import {Controller, Get, Param} from '@nestjs/common';
import {ProductRepository} from '../../services/product/product-repository.service';

@Controller('product')
export class ProductController {

    constructor(private readonly productRepo: ProductRepository) {
    }

    @Get('find/:name')
    async getProductDataByName(@Param('name') name: string) {
        return await this.productRepo.getProductDataByName(name);
    }

    @Get(':type/:brand/:color')
    async getProductDataByTypeBrandColor(@Param('type') type: string,
                                         @Param('brand') brand: string,
                                         @Param('color') color: string) {
        return await this.productRepo.getProductDataByTypeBrandColor(type, brand, color);
    }

    @Get('all')
    async getProducts() {
        return await this.productRepo.getAllProducts();
    }

    @Get('random')
    async getRandpomProduct() {
        return await this.productRepo.getRandomProduct();
    }
}
