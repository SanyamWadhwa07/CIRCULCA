export interface LCAData {
  material: string;
  processType: 'conventional' | 'circular';
  rawMaterials: {
    primary: number;
    recycled: number;
  };
  energy: {
    consumption: number;
    renewable: number;
  };
  transport: {
    distance: number;
    mode: string;
  };
  endOfLife: {
    recycling: number;
    reuse: number;
    disposal: number;
  };
}

export interface EnvironmentalMetrics {
  carbonFootprint: number;
  waterUsage: number;
  energyConsumption: number;
  wasteGeneration: number;
}

export interface CircularityMetrics {
  recycledContent: number;
  resourceEfficiency: number;
  productLifeExtension: number;
  reuseRate: number;
  recyclingRate: number;
}

export interface AIProcessingData {
  confidence: number;
  missingDataEstimated: string[];
  recommendations: string[];
  uncertaintyRange: {
    min: number;
    max: number;
  };
}

export interface ComparisonData {
  conventional: {
    environmental: EnvironmentalMetrics;
    circularity: CircularityMetrics;
  };
  circular: {
    environmental: EnvironmentalMetrics;
    circularity: CircularityMetrics;
  };
}