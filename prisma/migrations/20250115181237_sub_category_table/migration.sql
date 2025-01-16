-- CreateTable
CREATE TABLE `SubCategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cat_id` INTEGER NOT NULL,
    `subcat_id` INTEGER NOT NULL,
    `subcat_name_bn` VARCHAR(191) NOT NULL,
    `subcat_name_en` VARCHAR(191) NOT NULL,
    `no_of_dua` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
