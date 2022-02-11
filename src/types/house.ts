export type IHouseType = "apartment" | "villa" | "boomgardi" | "cottage";
export interface HouseCardItemProps {
  id: number;
  title: string;
  type: IHouseType;
  area_type: string;
  pricing: {
    median_price: {
      amount: number;
      currency_name: string;
      currency_short_form: string;
    };
    max_price: {
      amount: number;
      currency_name: string;
      currency_short_form: string;
    };
    min_price: {
      amount: number;
      currency_name: string;
      currency_short_form: string;
    };
    total: {
      amount: number;
      currency_name: string;
      currency_short_form: string;
    };
    total_without_discount_days: {
      amount: number;
      currency_name: string;
      currency_short_form: string;
    };
    price_to_show: {
      amount: number;
      currency_name: string;
      currency_short_form: string;
    };
    instant_price: {
      amount: number;
      currency_name: string;
      currency_short_form: string;
    };
    today_price: {
      amount: number;
      currency_name: string;
      currency_short_form: string;
    };
  };
  location: {
    city: string;
    province: string;
    latitude: string;
    longitude: string;
    village: string;
  };
  mehman_navaz: number;
  rank: number;
  rooms: number;
  accommodates: number;
  max_accommodates: number;
  extra_accommodates: number;
  extra_person: number;
  days_stay: number;
  reviews: number;
  beds: number;
  is_instant: boolean;
  you_clean: number;
  cover_photo: {
    id: string;
    is_default: boolean;
    absolute_url: string;
    caption: string;
    thumbnail_absolute_url: string;
  };
  has_watermarked_photo: boolean;
  has_long_term_discount: boolean;
  with: {
    photos: {
      id: string;
      is_default: boolean;
      absolute_url: string;
      caption: string;
      thumbnail_absolute_url: string;
    }[];
    features: string[];
  };
}
