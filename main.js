// Initialize Lucide icons
lucide.createIcons();

// Menu data
const menuData = {
    'Playgrounds': {
        title: 'Playground Equipment',
        titleColor: 'text-orange-500',
        categories: {
            'Playground Structures': [
                'Fitness Structures',
                'Inclusive Playground Equipment', 
                'Indoor Playgrounds',
                'Shaded Structures',
                'Themed Structures',
                'Traditional & Fitness Combo Structures',
                'Traditional Post & Deck Structures'
            ],
            'Massage Centers': [],
            'Playhouses & Fun Centers': [],
            'Slides': []
        },
        products: [
            {
                id: 1,
                name: "1 Bashful Bluff Get Physical Structure",
                price: "$20,091.00",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
                isBusiness: true
            },
            {
                id: 2,
                name: "2 Denali Get Physical Structure", 
                price: "$19,152.00",
                image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop",
                isBusiness: false
            },
            {
                id: 3,
                name: "3 Summit Adventure Structure",
                price: "$22,500.00", 
                image: "https://images.unsplash.com/photo-1541740242-0e60489f3c75?w=300&h=200&fit=crop",
                isBusiness: false
            }
        ]
    },
    'Parks': {
        title: 'Park Equipment',
        titleColor: 'text-green-600',
        categories: {
            'Benches & Chairs': [
                'Metal Benches',
                'Metal With Plastic Coating Benches', 
                'Plastic Benches',
                'Chairs'
            ],
            'Tables': [
                'ADA Accessible Tables',
                'Children\'s Tables',
                'Metal Tables', 
                'Plastic Tables'
            ],
            'Dog Parks': [
                'Accessories',
                'Agility & Balance',
                'Jumps & Hoops',
                'Kits & Courses',
                'Signage',
                'Trash & Clean Up'
            ],
            'Music Parks': [
                'Aerophones',
                'Chimes & Bells',
                'Drums & Percussion',
                'Instrument Ensembles & Collections',
                'Pianos',
                'Xylophones & Metallophones'
            ],
            'Bike Racks': [],
            'Trash Receptacles': []
        },
        products: [
            {
                id: 1,
                name: "6' Shaded Table",
                price: "Add to Quote to See Price",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
                isBusiness: false
            },
            {
                id: 2,
                name: "Simple Table",
                price: "$1,100.25",
                image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop",
                isBusiness: true
            }
        ]
    },
    'Swings': {
        title: 'Swings',
        titleColor: 'text-blue-500',
        categories: {
            'Swing Sets': [
                'Adaptive Swings',
                'Arch Post Swings',
                'Cantilever Swings',
                'Shaded Swings',
                'Single Post Swings',
                'Tire & Nest Swings',
                'Tripod Swings'
            ],
            'Swing Seats': []
        },
        products: [
            {
                id: 1,
                name: "High-Capacity Single Post Adaptive Swing",
                price: "$2,094.00",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
                isBusiness: false
            },
            {
                id: 2,
                name: "Standard Swing Set",
                price: "$1,500.00",
                image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop",
                isBusiness: false
            }
        ]
    }
};

// Project carousel data
const projects = [
    {
        title: "Westtown Twp, PA",
        subtitle: "Westtown Park",
        description: "Custom playground designed for ages 2-12 featuring inclusive play elements and modern safety standards.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop"
    },
    {
        title: "Phoenixville, PA", 
        subtitle: "Phoenixville Park",
        description: "Award-winning community playground with natural elements and accessible design for all abilities.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
    },
    {
        title: "Westtown Twp, PA",
        subtitle: "Westtown Play Space", 
        description: "Innovative playground combining traditional play with modern interactive elements and landscaping.",
        image: "https://images.unsplash.com/photo-1541740242-0e60489f3c75?w=400&h=300&fit=crop"
    }
];

let currentProject = 0;
let hideTimeout = null;

// Initialize project carousel
function initProjectCarousel() {
    updateProjectDisplay();
    
    document.getElementById('prev-project').addEventListener('click', () => {
        currentProject = (currentProject - 1 + projects.length) % projects.length;
        updateProjectDisplay();
    });

    document.getElementById('next-project').addEventListener('click', () => {
        currentProject = (currentProject + 1) % projects.length;
        updateProjectDisplay();
    });
}

function updateProjectDisplay() {
    const project = projects[currentProject];
    const projectCard = document.getElementById('project-card');
    const indicators = document.getElementById('project-indicators');

    projectCard.innerHTML = `
        <div class="aspect-video overflow-hidden">
            <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
        </div>
        <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">${project.title}</h3>
            <h4 class="text-lg text-blue-600 mb-3">${project.subtitle}</h4>
            <p class="text-gray-600 mb-4">${project.description}</p>
            <button class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors">View Project</button>
        </div>
    `;

    indicators.innerHTML = projects.map((_, index) => 
        `<button class="w-3 h-3 rounded-full transition-colors ${index === currentProject ? 'bg-blue-600' : 'bg-gray-300'}" onclick="currentProject = ${index}; updateProjectDisplay();"></button>`
    ).join('');
}

// Render dropdown menu
function renderMenu(category) {
    const data = menuData[category];
    if (!data) return '';

    const columnsCount = category === 'Playgrounds' ? 3 : category === 'Parks' ? 4 : 4;
    const productColumnsCount = category === 'Playgrounds' ? 9 : 8;

    let categoriesHTML = '';
    if (data.categories) {
        const categoryEntries = Object.entries(data.categories);
        const categoriesPerColumn = Math.ceil(categoryEntries.length / (columnsCount - 1));
        
        for (let col = 0; col < columnsCount - 1; col++) {
            const startIdx = col * categoriesPerColumn;
            const endIdx = Math.min(startIdx + categoriesPerColumn, categoryEntries.length);
            const columnCategories = categoryEntries.slice(startIdx, endIdx);
            
            categoriesHTML += '<div>';
            columnCategories.forEach(([categoryName, subcategories]) => {
                categoriesHTML += `<h4 class="font-bold text-gray-800 mb-3">${categoryName}</h4>`;
                if (subcategories.length > 0) {
                    categoriesHTML += '<ul class="space-y-1 text-sm text-gray-600 mb-4">';
                    subcategories.forEach(sub => {
                        categoriesHTML += `<li><a href__="#" class="hover:text-blue-600">${sub}</a></li>`;
                    });
                    categoriesHTML += '</ul>';
                }
            });
            categoriesHTML += '</div>';
        }
    }

    let productsHTML = '';
    if (data.products && data.products.length > 0) {
        const displayProducts = data.products.slice(0, 2);
        productsHTML = displayProducts.map(product => `
            <div class="bg-blue-50/40 border border-gray-200 rounded-lg p-4 text-center">
                <div class="aspect-w-3 aspect-h-2 mb-4 rounded-lg overflow-hidden relative">
                    ${product.isBusiness ? '<span class="absolute top-2 left-2 bg-orange-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold z-10">Business</span>' : ''}
                    <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
                </div>
                <h4 class="font-bold text-gray-900 mb-2 leading-tight">${product.name}</h4>
                <p class="text-sm text-gray-600 mb-3">${product.price}</p>
                <button class="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 px-4 transition-colors">Add to Cart</button>
            </div>
        `).join('');
    }

    return `
        <div class="max-w-screen-2xl mx-auto px-6 py-8">
            <div class="grid grid-cols-12 gap-8">
                <div class="col-span-${columnsCount}">
                    <h3 class="text-xl font-bold ${data.titleColor} mb-6">${data.title}</h3>
                    <div class="grid grid-cols-${columnsCount - 1} gap-x-6 gap-y-6">
                        ${categoriesHTML}
                    </div>
                </div>
                <div class="col-span-${productColumnsCount}">
                    <div class="text-right mb-4">
                        <a href__="#" class="text-sm text-blue-600 hover:text-blue-800 font-bold">View All Products</a>
                    </div>
                    <div class="grid grid-cols-2 gap-6">
                        ${productsHTML}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Show dropdown menu
function showMenu(category) {
    if (!menuData[category]) return;
    
    clearTimeout(hideTimeout);
    
    const menuContainer = document.getElementById('dropdown-container');
    menuContainer.innerHTML = renderMenu(category);
    menuContainer.classList.add('show');
    
    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
}

// Hide dropdown menu
function hideMenu() {
    hideTimeout = setTimeout(() => {
        const menuContainer = document.getElementById('dropdown-container');
        menuContainer.classList.remove('show');
        document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    }, 150);
}

// Initialize dropdown functionality
function initDropdowns() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const menuContainer = document.getElementById('dropdown-container');
    
    categoryButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            const category = button.getAttribute('data-category');
            showMenu(category);
        });
        
        button.addEventListener('mouseleave', hideMenu);
    });

    menuContainer.addEventListener('mouseenter', () => {
        clearTimeout(hideTimeout);
    });
    
    menuContainer.addEventListener('mouseleave', hideMenu);
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initDropdowns();
    initProjectCarousel();
});