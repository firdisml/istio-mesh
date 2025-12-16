variable "region" {
  description = "AWS region for EKS"
  type        = string
  default     = "us-east-1"
}

variable "cluster_name" {
  description = "Name of the EKS cluster"
  type        = string
  default     = "demo-eks"
}

variable "node_instance_type" {
  description = "EC2 instance type for worker nodes"
  type        = string
  default     = "t4g.small"
}

variable "node_min_size" {
  description = "Minimum number of nodes"
  type        = number
  default     = 1
}

variable "node_max_size" {
  description = "Maximum number of nodes"
  type        = number
  default     = 1
}

variable "node_desired_size" {
  description = "Desired number of nodes"
  type        = number
  default     = 1
}

variable "capacity_type" {
  description = "Capacity type for managed node group (ON_DEMAND or SPOT)"
  type        = string
  default     = "SPOT"
}

variable "tags" {
  description = "Tags applied to resources"
  type        = map(string)
  default     = {
    Project = "isito-demo"
  }
}
