// Banco de dados dos itens
const materialData = {
    wood: {
        name: "Madeira",
        color: "#a07649",
        durability: 59,
        damage: 4,
        armor: 2,
        toughness: 0,
        imgs: {
            pickaxe: "https://minecraft.wiki/images/Thumb_Wooden_Pickaxe_JE3_BE3.png",
            sword: "https://minecraft.wiki/images/Thumb_Wooden_Sword_JE2_BE2.png",
            helmet: "https://minecraft.wiki/images/Thumb_Leather_Cap_JE4_BE2.png",
            chestplate: "https://minecraft.wiki/images/Thumb_Leather_Tunic_JE4_BE2.png"
        }
    },
    stone: {
        name: "Pedra",
        color: "#888",
        durability: 131,
        damage: 5,
        armor: 0,
        toughness: 0,
        imgs: {
            pickaxe: "https://minecraft.wiki/images/Thumb_Stone_Pickaxe_JE3_BE3.png",
            sword: "https://minecraft.wiki/images/Thumb_Stone_Sword_JE2_BE2.png",
            helmet: "https://minecraft.wiki/images/Thumb_Chainmail_Helmet_JE3_BE2.png",
            chestplate: "https://minecraft.wiki/images/Thumb_Chainmail_Chestplate_JE3_BE2.png"
        }
    },
    iron: {
        name: "Ferro",
        color: "#ddd",
        durability: 250,
        damage: 6,
        armor: 15,
        toughness: 0,
        imgs: {
            pickaxe: "https://minecraft.wiki/images/Thumb_Iron_Pickaxe_JE3_BE3.png",
            sword: "https://minecraft.wiki/images/Thumb_Iron_Sword_JE2_BE2.png",
            helmet: "https://minecraft.wiki/images/Thumb_Iron_Helmet_JE2_BE2.png",
            chestplate: "https://minecraft.wiki/images/Thumb_Iron_Chestplate_JE2_BE2.png"
        }
    },
    gold: {
        name: "Ouro",
        color: "#ffd700",
        durability: 32,
        damage: 4,
        armor: 11,
        toughness: 0,
        imgs: {
            pickaxe: "https://minecraft.wiki/images/Thumb_Golden_Pickaxe_JE3_BE3.png",
            sword: "https://minecraft.wiki/images/Thumb_Golden_Sword_JE2_BE2.png",
            helmet: "https://ma://minecraft.wiki/images/Thumb_Golden_Chestplate_JE2_BE2.png"
        }
    },
    diamond: {
        name: "Diamante",
        color: "#4de1ff",
        durability: 1561,
        damage: 7,
        armor: 20,
        toughness: 8,
        imgs: {
            pickaxe: "https://minecraft.wiki/images/Thumb_Diamond_Pickaxe_JE3_BE3.png",
            sword: "https://minecraft.wiki/images/Thumb_Diamond_Sword_JE3_BE3.png",
            helmet: "https://minecraft.wiki/images/Thumb_Diamond_Helmet_JE2_BE2.png",
            chestplate: "https://minecraft.wiki/images/Thumb_Diamond_Chestplate_JE2_BE2.png"
        }
    },
    netherite: {
        name: "Netherite",
        color: "#958686",
        durability: 2031,
        damage: 8,
        armor: 20,
        toughness: 12,
        imgs: {
            pickaxe: "https://minecraft.fandom.com/pt/wiki/Categoria:Ferramentas",
            sword: "https://tiermaker.com/create/melhores-ferramentas-do-minecraft-17596094",
            helmet: "https://www.pngegg.com/pt/png-xyrmw",
            chestplate: "https://www.pngegg.com/pt/png-xyrmw"
        }
    }
};

function updateTier(tier) {
    const data = materialData[tier];

    // Atualizar Títulos e Cores
    const titleTools = document.getElementById('tier-title-tools');
    const titleArmor = document.getElementById('tier-title-armor');
    
    titleTools.innerText = `Ferramentas de ${data.name}`;
    titleArmor.innerText = `Armadura de ${data.name}`;
    titleTools.style.color = data.color;
    titleArmor.style.color = data.color;

    // Atualizar Imagens
    document.getElementById('img-pickaxe').src = data.imgs.pickaxe;
    document.getElementById('img-sword').src = data.imgs.sword;
    document.getElementById('img-helmet').src = data.imgs.helmet;
    document.getElementById('img-chestplate').src = data.imgs.chestplate;

    // Atualizar Números dos Status
    document.getElementById('stat-durability').innerText = data.durability;
    document.getElementById('stat-damage').innerText = data.damage;
    document.getElementById('stat-armor').innerText = data.armor;
    document.getElementById('stat-toughness').innerText = data.toughness;

    // Atualizar Barras de Progresso (Cálculos baseados nos valores máximos do jogo)
    document.getElementById('bar-durability').style.width = (data.durability / 2031 * 100) + "%";
    document.getElementById('bar-damage').style.width = (data.damage / 8 * 100) + "%";
    document.getElementById('bar-armor').style.width = (data.armor / 20 * 100) + "%";
    document.getElementById('bar-toughness').style.width = (data.toughness / 12 * 100) + "%";
}

// Inicializar o site com Diamante por padrão
window.onload = () => updateTier('diamond');