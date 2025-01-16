-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cat_id` VARCHAR(191) NOT NULL,
    `cat_name_bn` VARCHAR(191) NOT NULL,
    `cat_name_en` VARCHAR(191) NOT NULL,
    `no_of_subcat` INTEGER NOT NULL,
    `no_of_dua` INTEGER NOT NULL,
    `cat_icon` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
