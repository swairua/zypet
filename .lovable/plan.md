## Product Portfolio Expansion Plan

Restructure the Products section to showcase 3 product categories with clean, scannable UI.

### 1. Rebuild `ProductShowcase.tsx` — Category Tabs

Replace the current 2-variant toggle with **3 top-level category tabs**:

**Tab A: Whole Rabbit Prey (BARF)** — signature product
- Sub-toggle: With Fur / Without Fur / Minced With Fur / Minced Without Fur
- Per-kg prices: 500 / 600 / 600 / 700
- Package tiers (min 5kg) from Image 2 naming:

  | Package | Kg | With Fur | Without Fur | Minced W/Fur | Minced W/O Fur |
  |---|---|---|---|---|---|
  | Starter Pack | 5 | 2,500 | 3,000 | 3,000 | 3,500 |
  | Loyal Bowl | 10 | 5,000 | 6,000 | 6,000 | 7,000 |
  | Power Meal | 15 | 7,500 | 9,000 | 9,000 | 10,500 |
  | Family Pack | 20 | 10,000 | 12,000 | 12,000 | 14,000 |
  | Pro Pack | 25 | 12,500 | 15,000 | 15,000 | 17,500 |
  | Breeders Bulk | 30 | 15,000 | 18,000 | 18,000 | 21,000 |

**Tab B: Human-Grade Rabbit Meat** — new (for owners who want cleaner cuts)
- Whole Rabbit (no fur/skin) — KES 900/kg
- Whole Rabbit Minced — KES 1,000/kg
- Deboned / Boneless — KES 1,300/kg
- Minced Boneless — KES 1,400/kg
- Displayed as a 4-card grid with per-kg pricing + "Order via WhatsApp" (opens WA with product + qty ask)

**Tab C: Premium Chicken Products** — new (min 10kg per product)
- Chicken Heads — KES 120/kg
- Chicken Feet — KES 150/kg
- Chicken Necks — KES 220/kg
- Chicken Heart — KES 450/kg *(newly added)*
- Chicken Liver — KES 350/kg
- Chicken Gizzards — KES 550/kg
- Displayed as a 6-card grid with icon, name, price/kg, "Min 10kg" badge, and WhatsApp order button

### 2. Assets
- Reuse existing rabbit prey images for Tab A (with-fur / without-fur uploads already in place). Add 2 placeholder images (generated) for minced variants.
- Use the user-uploaded chicken poster crops OR generate 6 clean product icons/photos for the chicken cards. **Question below on this.**
- Generate 1 hero image for the human-grade rabbit tab.

### 3. Section Copy
- Update section heading from "Our Signature Product" → "Our Product Range"
- Subheading: "From whole prey BARF diets to premium chicken cuts — nutrition for every pet."

### 4. Minor Updates
- Update Hero subheadline to hint at expanded range (still lead with rabbit prey).
- Keep payment (Till 5630044) and delivery info card at bottom of section.
- All order buttons pre-fill WhatsApp message with product name, variant, size, and price.

### Technical notes
- Single `ProductShowcase.tsx` refactor; category state via `useState<'prey' | 'human' | 'chicken'>`.
- Package data extracted into typed constants at top of file for maintainability.
- Fully responsive: tabs stack on mobile, card grids collapse 3→2→1 col.

### Clarifying question
For the **chicken products cards**, do you want me to:
(a) Generate clean individual product photos for each of the 6 items, OR
(b) Use simple icon + text cards (faster, more consistent look), OR
(c) Crop the chicken images from the uploaded poster?