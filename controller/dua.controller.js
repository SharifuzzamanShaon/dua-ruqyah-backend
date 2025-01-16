const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getDuasBySubcategory = async (req, res) => {
  const { subcat_id } = req.params;

  if (!subcat_id) {
    return res.status(400).json({ error: "subcat_id is required" });
  }
  try {
    const duas = await prisma.dua.findMany({
      where: { subcat_id: parseInt(subcat_id, 10) }, // Ensure subcat_id is a number
    });
    if (duas.length === 0) {
      return res.status(404).json({ message: "No Duas found for this subcategory." });
    }
    return res.status(200).json({ success: true, data: duas });
  } catch (error) {
    console.error("Error fetching Duas:", error);
    return res.status(500).json({ error: "An error occurred while fetching Duas." });
  }
};

module.exports={getDuasBySubcategory}
