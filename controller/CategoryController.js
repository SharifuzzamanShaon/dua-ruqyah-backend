const { prisma } = require("../DB/ConnectDB");

const getAllCategories = async (req, res, next) => {
  try {
    // Fetch all categories with their subcategories
    const categories = await prisma.category.findMany({
      include: {
        subcategories: true, // Include subcategories for each category
      },
    });

    // Map the categories to add the subcategory details
    const categoriesWithDetails = categories.map((category) => ({
      id: category.id,
      cat_id: category.cat_id,
      cat_name_bn: category.cat_name_bn,
      cat_name_en: category.cat_name_en,
      no_of_subcat: category.subcategories.length, // Count subcategories
      no_of_dua: category.no_of_dua,
      cat_icon: category.cat_icon,
      subcategories: category.subcategories.map((subcat) => ({
        subcat_id: subcat.id,
        subcat_name_bn: subcat.subcat_name_bn,
        subcat_name_en: subcat.subcat_name_en,
      })),
    }));

    return res.status(200).json({
      success: true,
      message: "All categories fetched successfully",
      categories: categoriesWithDetails,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getAllCategories };
