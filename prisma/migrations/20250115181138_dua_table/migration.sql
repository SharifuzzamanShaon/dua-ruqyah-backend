-- CreateTable
CREATE TABLE `Dua` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cat_id` INTEGER NOT NULL,
    `subcat_id` INTEGER NOT NULL,
    `dua_id` INTEGER NOT NULL,
    `dua_name_bn` VARCHAR(191) NOT NULL,
    `dua_name_en` VARCHAR(191) NOT NULL,
    `top_bn` VARCHAR(191) NOT NULL,
    `top_en` VARCHAR(191) NOT NULL,
    `dua_arabic` VARCHAR(191) NULL,
    `dua_indopak` VARCHAR(191) NULL,
    `clean_arabic` VARCHAR(191) NULL,
    `transliteration_bn` VARCHAR(191) NULL,
    `transliteration_en` VARCHAR(191) NULL,
    `translation_bn` VARCHAR(191) NULL,
    `translation_en` VARCHAR(191) NULL,
    `bottom_bn` VARCHAR(191) NULL,
    `bottom_en` VARCHAR(191) NULL,
    `refference_bn` VARCHAR(191) NOT NULL,
    `refference_en` VARCHAR(191) NOT NULL,
    `audio` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
