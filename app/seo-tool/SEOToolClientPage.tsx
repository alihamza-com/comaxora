"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import {
  Upload,
  FileText,
  Globe,
  Search,
  Target,
  Brain,
  Rocket,
  CheckCircle,
  AlertCircle,
  Eye,
  Star,
  ArrowRight,
  Sparkles,
  Award,
  Users,
  Heart,
  MessageCircle,
  Mail,
  Phone,
  Clock,
  Settings,
  FileCode,
  Folder,
  Copy,
  ChevronDown,
  ChevronRight,
  FolderOpen,
  Code2,
  FileX,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/hooks/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface ProjectInfo {
  websiteUrl: string
  businessName: string
  description: string
  targetKeywords: string[]
  industry: string
  targetAudience: string
  location: string
  competitors: string[]
}

interface ProjectAnalysis {
  projectType: "html" | "react" | "nextjs" | "mixed"
  framework: string
  totalFiles: number
  pageFiles: FileAnalysis[]
  componentFiles: FileAnalysis[]
  staticFiles: FileAnalysis[]
  hasRouting: boolean
  hasMetadata: boolean
  seoReadiness: number
}

interface FileAnalysis {
  filename: string
  path: string
  type: "html" | "jsx" | "tsx" | "js" | "ts" | "css" | "other"
  size: number
  isPage: boolean
  isComponent: boolean
  needsSEO: boolean
  currentSEO: {
    hasTitle: boolean
    hasDescription: boolean
    hasKeywords: boolean
    hasOpenGraph: boolean
    hasStructuredData: boolean
  }
  seoCode: {
    metadata?: string
    htmlHead?: string
    structuredData?: string
  }
  issues: string[]
  recommendations: string[]
  seoScore: number
}

interface ProcessingStep {
  id: string
  name: string
  status: "pending" | "processing" | "completed" | "error"
  description: string
  progress: number
}

const features = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Project Analysis",
    description: "Automatically detects your project type (HTML, React, Next.js) and analyzes all pages.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "SEO Code Generation",
    description: "Generates ready-to-use SEO code that you can copy and paste directly into your project.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <FileCode className="w-8 h-8" />,
    title: "Framework Detection",
    description: "Smart detection of HTML, JSX, TSX files with appropriate SEO code for each type.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Page-by-Page SEO",
    description: "Individual SEO optimization for each page with custom metadata and structured data.",
    color: "from-orange-500 to-red-500",
  },
]

export default function SEOToolClientPage() {
  const [currentStep, setCurrentStep] = useState<"info" | "upload" | "analysis" | "results">("info")
  const [projectInfo, setProjectInfo] = useState<ProjectInfo>({
    websiteUrl: "",
    businessName: "",
    description: "",
    targetKeywords: [],
    industry: "",
    targetAudience: "",
    location: "",
    competitors: [],
  })
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [processingError, setProcessingError] = useState<string | null>(null)
  const [processingSteps, setProcessingSteps] = useState<ProcessingStep[]>([
    {
      id: "extract",
      name: "Extracting Project",
      status: "pending",
      description: "Extracting and analyzing project structure",
      progress: 0,
    },
    {
      id: "detect",
      name: "Detecting Framework",
      status: "pending",
      description: "Identifying project type (HTML/React/Next.js)",
      progress: 0,
    },
    {
      id: "analyze",
      name: "Analyzing Pages",
      status: "pending",
      description: "Scanning all pages for SEO opportunities",
      progress: 0,
    },
    {
      id: "generate",
      name: "Generating SEO Code",
      status: "pending",
      description: "Creating copy-paste ready SEO code",
      progress: 0,
    },
  ])
  const [projectAnalysis, setProjectAnalysis] = useState<ProjectAnalysis | null>(null)
  const [selectedFile, setSelectedFile] = useState<FileAnalysis | null>(null)
  const [expandedFiles, setExpandedFiles] = useState<Set<string>>(new Set())
  const { toast } = useToast()

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0]
      if (file && (file.type === "application/zip" || file.name.endsWith(".zip"))) {
        setUploadedFile(file)
        setProcessingError(null)
        toast({
          title: "Project uploaded successfully! 🚀",
          description: `${file.name} is ready for SEO analysis.`,
        })
      } else {
        toast({
          title: "Invalid file type ❌",
          description: "Please upload a ZIP file containing your project.",
          variant: "destructive",
        })
      }
    },
    [toast],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/zip": [".zip"],
    },
    maxFiles: 1,
    maxSize: 100 * 1024 * 1024, // 100MB
  })

  const handleProjectInfoSubmit = () => {
    if (!projectInfo.websiteUrl || !projectInfo.businessName || !projectInfo.description) {
      toast({
        title: "Missing Information ⚠️",
        description: "Please fill in all required fields to continue.",
        variant: "destructive",
      })
      return
    }
    setCurrentStep("upload")
    toast({
      title: "Project Information Saved! ✅",
      description: "Now upload your project ZIP file for SEO analysis.",
    })
  }

  const startProjectAnalysis = async () => {
    if (!uploadedFile) {
      toast({
        title: "No file uploaded ❌",
        description: "Please upload your project ZIP file first.",
        variant: "destructive",
      })
      return
    }

    setCurrentStep("analysis")
    setIsProcessing(true)
    setProcessingError(null)

    try {
      // Step 1: Extract project
      setProcessingSteps((prev) =>
        prev.map((step) => (step.id === "extract" ? { ...step, status: "processing" } : step)),
      )

      for (let i = 0; i <= 100; i += 10) {
        await new Promise((resolve) => setTimeout(resolve, 100))
        setProcessingSteps((prev) => prev.map((step) => (step.id === "extract" ? { ...step, progress: i } : step)))
      }

      setProcessingSteps((prev) =>
        prev.map((step) => (step.id === "extract" ? { ...step, status: "completed", progress: 100 } : step)),
      )

      // Step 2: Detect framework
      setProcessingSteps((prev) =>
        prev.map((step) => (step.id === "detect" ? { ...step, status: "processing" } : step)),
      )

      for (let i = 0; i <= 100; i += 15) {
        await new Promise((resolve) => setTimeout(resolve, 80))
        setProcessingSteps((prev) => prev.map((step) => (step.id === "detect" ? { ...step, progress: i } : step)))
      }

      setProcessingSteps((prev) =>
        prev.map((step) => (step.id === "detect" ? { ...step, status: "completed", progress: 100 } : step)),
      )

      // Step 3: Analyze pages
      setProcessingSteps((prev) =>
        prev.map((step) => (step.id === "analyze" ? { ...step, status: "processing" } : step)),
      )

      // Create FormData for API call
      const formData = new FormData()
      formData.append("file", uploadedFile)
      formData.append("projectInfo", JSON.stringify(projectInfo))

      // Call the project analysis API
      const response = await fetch("/api/analyze-project", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response
          .json()
          .catch(() => ({ error: "Unknown error", details: "Failed to parse error response" }))
        throw new Error(errorData.details || errorData.error || `HTTP ${response.status}: ${response.statusText}`)
      }

      const analysisResult = await response.json()

      for (let i = 0; i <= 100; i += 8) {
        await new Promise((resolve) => setTimeout(resolve, 120))
        setProcessingSteps((prev) => prev.map((step) => (step.id === "analyze" ? { ...step, progress: i } : step)))
      }

      setProcessingSteps((prev) =>
        prev.map((step) => (step.id === "analyze" ? { ...step, status: "completed", progress: 100 } : step)),
      )

      // Step 4: Generate SEO code
      setProcessingSteps((prev) =>
        prev.map((step) => (step.id === "generate" ? { ...step, status: "processing" } : step)),
      )

      for (let i = 0; i <= 100; i += 12) {
        await new Promise((resolve) => setTimeout(resolve, 100))
        setProcessingSteps((prev) => prev.map((step) => (step.id === "generate" ? { ...step, progress: i } : step)))
      }

      setProcessingSteps((prev) =>
        prev.map((step) => (step.id === "generate" ? { ...step, status: "completed", progress: 100 } : step)),
      )

      // Set the analysis results
      setProjectAnalysis(analysisResult.analysis)
      setCurrentStep("results")

      toast({
        title: "🎉 Project Analysis Complete!",
        description: `Analyzed ${analysisResult.analysis.totalFiles} files. SEO code ready to copy!`,
      })
    } catch (error) {
      console.error("Project analysis error:", error)
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred"
      setProcessingError(errorMessage)

      setProcessingSteps((prev) =>
        prev.map((step) => (step.status === "processing" ? { ...step, status: "error" } : step)),
      )

      toast({
        title: "Analysis failed ❌",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  const resetTool = () => {
    setCurrentStep("info")
    setProjectInfo({
      websiteUrl: "",
      businessName: "",
      description: "",
      targetKeywords: [],
      industry: "",
      targetAudience: "",
      location: "",
      competitors: [],
    })
    setUploadedFile(null)
    setIsProcessing(false)
    setProjectAnalysis(null)
    setSelectedFile(null)
    setExpandedFiles(new Set())
    setProcessingError(null)
    setProcessingSteps((prev) => prev.map((step) => ({ ...step, status: "pending", progress: 0 })))
  }

  const toggleFileExpansion = (filename: string) => {
    const newExpanded = new Set(expandedFiles)
    if (newExpanded.has(filename)) {
      newExpanded.delete(filename)
    } else {
      newExpanded.add(filename)
    }
    setExpandedFiles(newExpanded)
  }

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Code copied! 📋",
      description: `${type} code copied to clipboard.`,
    })
  }

  const getProjectTypeIcon = (type: string) => {
    switch (type) {
      case "html":
        return <Globe className="w-5 h-5 text-orange-500" />
      case "react":
        return <Code2 className="w-5 h-5 text-blue-500" />
      case "nextjs":
        return <Rocket className="w-5 h-5 text-black dark:text-white" />
      default:
        return <FileCode className="w-5 h-5 text-gray-500" />
    }
  }

  const getFileTypeIcon = (type: string) => {
    switch (type) {
      case "html":
        return <Globe className="w-4 h-4 text-orange-500" />
      case "jsx":
        return <Code2 className="w-4 h-4 text-blue-500" />
      case "tsx":
        return <FileCode className="w-4 h-4 text-purple-500" />
      case "js":
        return <FileText className="w-4 h-4 text-yellow-500" />
      case "ts":
        return <FileText className="w-4 h-4 text-blue-600" />
      case "css":
        return <Settings className="w-4 h-4 text-pink-500" />
      default:
        return <FileX className="w-4 h-4 text-gray-500" />
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-white/20 dark:bg-gray-800/20 rounded-3xl p-8 md:p-16 border border-white/30 shadow-2xl"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <FolderOpen className="w-12 h-12 text-white" />
              </motion.div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  SEO Code Generator
                </h1>
                <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                  Upload Project → Analyze Pages → Copy SEO Code
                </p>
              </div>
            </div>

            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Upload your project ZIP file and get{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">ready-to-use SEO code</span> for each
              page that you can copy and paste directly into your{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">VS Code</span>!
            </p>

            {/* Feature Highlights */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {[
                {
                  icon: <FolderOpen className="w-6 h-6" />,
                  title: "Project Upload",
                  desc: "Upload entire project",
                  color: "text-blue-500",
                },
                {
                  icon: <Search className="w-6 h-6" />,
                  title: "Smart Analysis",
                  desc: "Detect framework & pages",
                  color: "text-green-500",
                },
                {
                  icon: <Code2 className="w-6 h-6" />,
                  title: "SEO Code Gen",
                  desc: "Ready-to-paste code",
                  color: "text-purple-500",
                },
                {
                  icon: <Copy className="w-6 h-6" />,
                  title: "Copy & Paste",
                  desc: "Direct to VS Code",
                  color: "text-orange-500",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center p-4 bg-white/20 dark:bg-gray-800/20 rounded-xl backdrop-blur-sm border border-white/30"
                >
                  <div className={`${feature.color} mb-2 flex justify-center`}>{feature.icon}</div>
                  <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{feature.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <Users className="w-5 h-5" />, text: "500+ Projects", color: "text-blue-500" },
                { icon: <Award className="w-5 h-5" />, text: "99% Accuracy", color: "text-green-500" },
                { icon: <Star className="w-5 h-5" />, text: "5.0/5 Rating", color: "text-yellow-500" },
                { icon: <Heart className="w-5 h-5" />, text: "100% Free", color: "text-red-500" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2 text-sm font-medium p-3 bg-white/20 dark:bg-gray-800/20 rounded-xl backdrop-blur-sm border border-white/30"
                >
                  <span className={item.color}>{item.icon}</span>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main SEO Tool Interface */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Card className="backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 border-white/30 shadow-2xl overflow-hidden">
              <CardHeader className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-b border-white/20">
                <CardTitle className="text-3xl font-bold flex items-center justify-center gap-3">
                  <FolderOpen className="w-8 h-8 text-blue-600" />
                  Professional SEO Code Generator
                  <Sparkles className="w-8 h-8 text-purple-600" />
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Upload Project → Analyze All Pages → Generate Copy-Paste SEO Code
                </p>
              </CardHeader>

              <CardContent className="p-8">
                <AnimatePresence mode="wait">
                  {/* Step 1: Project Information */}
                  {currentStep === "info" && (
                    <motion.div
                      key="info"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-8"
                    >
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                          <Settings className="w-6 h-6 text-blue-600" />
                          Project Information
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Tell us about your project for personalized SEO code generation
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Basic Information */}
                        <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-700">
                          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <Globe className="w-5 h-5 text-blue-600" />
                            Basic Information
                          </h4>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="websiteUrl">Website URL *</Label>
                              <Input
                                id="websiteUrl"
                                placeholder="https://yourwebsite.com"
                                value={projectInfo.websiteUrl}
                                onChange={(e) => setProjectInfo((prev) => ({ ...prev, websiteUrl: e.target.value }))}
                                className="mt-1"
                              />
                            </div>
                            <div>
                              <Label htmlFor="businessName">Business Name *</Label>
                              <Input
                                id="businessName"
                                placeholder="Your Business Name"
                                value={projectInfo.businessName}
                                onChange={(e) => setProjectInfo((prev) => ({ ...prev, businessName: e.target.value }))}
                                className="mt-1"
                              />
                            </div>
                            <div>
                              <Label htmlFor="industry">Industry</Label>
                              <Input
                                id="industry"
                                placeholder="e.g., Technology, Healthcare, E-commerce"
                                value={projectInfo.industry}
                                onChange={(e) => setProjectInfo((prev) => ({ ...prev, industry: e.target.value }))}
                                className="mt-1"
                              />
                            </div>
                            <div>
                              <Label htmlFor="location">Location</Label>
                              <Input
                                id="location"
                                placeholder="City, Country"
                                value={projectInfo.location}
                                onChange={(e) => setProjectInfo((prev) => ({ ...prev, location: e.target.value }))}
                                className="mt-1"
                              />
                            </div>
                          </div>
                        </Card>

                        {/* SEO Details */}
                        <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-700">
                          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <Search className="w-5 h-5 text-purple-600" />
                            SEO Details
                          </h4>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="description">Business Description *</Label>
                              <Textarea
                                id="description"
                                placeholder="Describe your business, products, or services..."
                                value={projectInfo.description}
                                onChange={(e) => setProjectInfo((prev) => ({ ...prev, description: e.target.value }))}
                                className="mt-1"
                                rows={3}
                              />
                            </div>
                            <div>
                              <Label htmlFor="keywords">Target Keywords (comma-separated)</Label>
                              <Input
                                id="keywords"
                                placeholder="web development, SEO services, digital marketing"
                                value={projectInfo.targetKeywords.join(", ")}
                                onChange={(e) =>
                                  setProjectInfo((prev) => ({
                                    ...prev,
                                    targetKeywords: e.target.value
                                      .split(",")
                                      .map((k) => k.trim())
                                      .filter((k) => k),
                                  }))
                                }
                                className="mt-1"
                              />
                            </div>
                            <div>
                              <Label htmlFor="audience">Target Audience</Label>
                              <Input
                                id="audience"
                                placeholder="Small businesses, entrepreneurs, etc."
                                value={projectInfo.targetAudience}
                                onChange={(e) =>
                                  setProjectInfo((prev) => ({ ...prev, targetAudience: e.target.value }))
                                }
                                className="mt-1"
                              />
                            </div>
                            <div>
                              <Label htmlFor="competitors">Main Competitors (comma-separated)</Label>
                              <Input
                                id="competitors"
                                placeholder="competitor1.com, competitor2.com"
                                value={projectInfo.competitors.join(", ")}
                                onChange={(e) =>
                                  setProjectInfo((prev) => ({
                                    ...prev,
                                    competitors: e.target.value
                                      .split(",")
                                      .map((c) => c.trim())
                                      .filter((c) => c),
                                  }))
                                }
                                className="mt-1"
                              />
                            </div>
                          </div>
                        </Card>
                      </div>

                      <div className="text-center">
                        <Button
                          onClick={handleProjectInfoSubmit}
                          size="lg"
                          className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <ArrowRight className="w-5 h-5 mr-2" />
                          Continue to Project Upload
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Project Upload */}
                  {currentStep === "upload" && (
                    <motion.div
                      key="upload"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-8"
                    >
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                          <Upload className="w-6 h-6 text-blue-600" />
                          Upload Your Project
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Upload your complete project as a ZIP file for comprehensive SEO analysis
                        </p>
                      </div>

                      {/* Project Summary */}
                      <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-700">
                        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <Eye className="w-5 h-5 text-blue-600" />
                          Project Overview
                        </h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <p>
                              <strong>Website:</strong> {projectInfo.websiteUrl}
                            </p>
                            <p>
                              <strong>Business:</strong> {projectInfo.businessName}
                            </p>
                            <p>
                              <strong>Industry:</strong> {projectInfo.industry || "Not specified"}
                            </p>
                            <p>
                              <strong>Location:</strong> {projectInfo.location || "Not specified"}
                            </p>
                          </div>
                          <div>
                            <p>
                              <strong>Target Keywords:</strong> {projectInfo.targetKeywords.length} keywords
                            </p>
                            <p>
                              <strong>Competitors:</strong> {projectInfo.competitors.length} competitors
                            </p>
                            <p>
                              <strong>Target Audience:</strong> {projectInfo.targetAudience || "Not specified"}
                            </p>
                          </div>
                        </div>
                      </Card>

                      {!uploadedFile ? (
                        <div
                          {...getRootProps()}
                          className={`relative border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-500 overflow-hidden ${
                            isDragActive
                              ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 scale-105"
                              : "border-gray-300 dark:border-gray-600 hover:border-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                          }`}
                        >
                          <input {...getInputProps()} />
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

                          <motion.div
                            animate={{
                              y: isDragActive ? -10 : 0,
                              scale: isDragActive ? 1.1 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                            className="relative z-10"
                          >
                            <div className="w-24 h-24 mx-auto mb-6 relative">
                              <FolderOpen className="w-24 h-24 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                              {isDragActive && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping"
                                />
                              )}
                            </div>
                            <h3 className="text-2xl font-bold mb-3">
                              {isDragActive ? "Drop your project here! 🚀" : "Upload Project ZIP File"}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                              Drag and drop your project ZIP file here, or click to browse
                            </p>
                            <div className="grid grid-cols-2 gap-4 text-sm max-w-md mx-auto">
                              <Badge variant="outline" className="px-4 py-2">
                                <Globe className="w-4 h-4 mr-2" />
                                HTML Projects
                              </Badge>
                              <Badge variant="outline" className="px-4 py-2">
                                <Code2 className="w-4 h-4 mr-2" />
                                React/Next.js
                              </Badge>
                              <Badge variant="outline" className="px-4 py-2">
                                <Folder className="w-4 h-4 mr-2" />
                                Max 100MB
                              </Badge>
                              <Badge variant="outline" className="px-4 py-2">
                                <Copy className="w-4 h-4 mr-2" />
                                Copy-Paste Code
                              </Badge>
                            </div>
                          </motion.div>
                        </div>
                      ) : (
                        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-700">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-4 mb-4">
                              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white">
                                <FolderOpen className="w-8 h-8" />
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-green-900 dark:text-green-100">
                                  Project Ready for Analysis
                                </h3>
                                <p className="text-green-700 dark:text-green-300 font-medium">{uploadedFile.name}</p>
                                <p className="text-sm text-green-600 dark:text-green-400">
                                  Size: {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                              <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
                                <CheckCircle className="w-4 h-4" />
                                <span>Detect framework</span>
                              </div>
                              <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
                                <CheckCircle className="w-4 h-4" />
                                <span>Analyze all pages</span>
                              </div>
                              <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
                                <CheckCircle className="w-4 h-4" />
                                <span>Generate SEO code</span>
                              </div>
                              <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
                                <CheckCircle className="w-4 h-4" />
                                <span>Copy to VS Code</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )}

                      <div className="flex gap-4 justify-center">
                        <Button
                          onClick={() => setCurrentStep("info")}
                          variant="outline"
                          size="lg"
                          className="px-8 py-4 bg-transparent"
                        >
                          <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
                          Back to Project Info
                        </Button>
                        <Button
                          onClick={startProjectAnalysis}
                          disabled={!uploadedFile}
                          size="lg"
                          className="px-12 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <Search className="w-5 h-5 mr-2" />
                          Analyze Project & Generate SEO Code
                          <Sparkles className="w-5 h-5 ml-2" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Analysis Processing */}
                  {currentStep === "analysis" && (
                    <motion.div
                      key="analysis"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-8"
                    >
                      <div className="text-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          className="w-24 h-24 mx-auto mb-6 relative"
                        >
                          <div className="w-24 h-24 border-4 border-blue-200 dark:border-blue-800 rounded-full"></div>
                          <div className="absolute inset-0 w-24 h-24 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
                          <div className="absolute inset-3 w-18 h-18 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <Search className="w-10 h-10 text-white" />
                          </div>
                        </motion.div>

                        <h3 className="text-3xl font-bold mb-4">Analyzing Your Project</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                          Scanning all pages and generating SEO code for <strong>{projectInfo.businessName}</strong>
                        </p>

                        <div className="flex items-center justify-center gap-6 mb-8">
                          <Badge variant="outline" className="px-4 py-2">
                            <FolderOpen className="w-4 h-4 mr-2" />
                            {uploadedFile?.name}
                          </Badge>
                          <Badge variant="outline" className="px-4 py-2">
                            <Target className="w-4 h-4 mr-2" />
                            {projectInfo.targetKeywords.length} Keywords
                          </Badge>
                        </div>
                      </div>

                      {/* Error Display */}
                      {processingError && (
                        <Alert className="border-red-200 bg-red-50 dark:bg-red-900/20">
                          <AlertCircle className="h-4 w-4 text-red-600" />
                          <AlertDescription className="text-red-800 dark:text-red-200">
                            <strong>Analysis Error:</strong> {processingError}
                            <div className="mt-2 flex gap-2">
                              <Button
                                onClick={() => setCurrentStep("upload")}
                                variant="outline"
                                size="sm"
                                className="border-red-300 text-red-700 hover:bg-red-100"
                              >
                                Try Different Project
                              </Button>
                              <Button
                                onClick={startProjectAnalysis}
                                variant="outline"
                                size="sm"
                                className="border-red-300 text-red-700 hover:bg-red-100 bg-transparent"
                              >
                                Retry Analysis
                              </Button>
                            </div>
                          </AlertDescription>
                        </Alert>
                      )}

                      <div className="space-y-6">
                        {processingSteps.map((step, index) => (
                          <motion.div
                            key={step.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`relative overflow-hidden rounded-xl border-2 transition-all duration-500 ${
                              step.status === "completed"
                                ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700"
                                : step.status === "processing"
                                  ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700"
                                  : step.status === "error"
                                    ? "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700"
                                    : "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                            }`}
                          >
                            {step.status === "processing" && (
                              <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: `${step.progress}%` }}
                                transition={{ duration: 0.5 }}
                                className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
                              />
                            )}

                            <div className="p-6">
                              <div className="flex items-center gap-4">
                                <div
                                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                    step.status === "completed"
                                      ? "bg-green-500 text-white"
                                      : step.status === "processing"
                                        ? "bg-blue-500 text-white"
                                        : step.status === "error"
                                          ? "bg-red-500 text-white"
                                          : "bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300"
                                  }`}
                                >
                                  {step.status === "completed" && <CheckCircle className="w-6 h-6" />}
                                  {step.status === "processing" && (
                                    <motion.div
                                      animate={{ rotate: 360 }}
                                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                                    />
                                  )}
                                  {step.status === "error" && <AlertCircle className="w-6 h-6" />}
                                  {step.status === "pending" && <Clock className="w-6 h-6" />}
                                </div>

                                <div className="flex-1">
                                  <div className="flex items-center justify-between mb-2">
                                    <h4 className="text-lg font-semibold">{step.name}</h4>
                                    {step.status === "processing" && (
                                      <Badge variant="outline" className="text-xs">
                                        {step.progress}%
                                      </Badge>
                                    )}
                                  </div>
                                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                                  {step.status === "processing" && (
                                    <Progress value={step.progress} className="w-full h-2 mt-3" />
                                  )}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Results */}
                  {currentStep === "results" && projectAnalysis && (
                    <motion.div
                      key="results"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-8"
                    >
                      {/* Success Header */}
                      <div className="text-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                          className="relative mb-6"
                        >
                          <div className="w-32 h-32 mx-auto relative">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20"
                            />
                            <div className="absolute inset-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                              <Award className="w-16 h-16 text-white" />
                            </div>
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                              className="absolute inset-0 bg-green-400/30 rounded-full"
                            />
                          </div>
                        </motion.div>

                        <h3 className="text-4xl font-bold text-green-600 dark:text-green-400 mb-4">
                          🎉 Project Analysis Complete!
                        </h3>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                          Your <strong>{projectInfo.businessName}</strong> project has been analyzed. SEO code is ready
                          to copy!
                        </p>

                        {/* Project Analysis Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-700">
                            <div className="flex items-center justify-center mb-2">
                              {getProjectTypeIcon(projectAnalysis.projectType)}
                            </div>
                            <div className="text-lg font-bold text-blue-600 capitalize">
                              {projectAnalysis.projectType}
                            </div>
                            <div className="text-sm text-blue-700 dark:text-blue-300">Project Type</div>
                          </div>
                          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-4 border border-green-200 dark:border-green-700">
                            <div className="text-2xl font-bold text-green-600">{projectAnalysis.totalFiles}</div>
                            <div className="text-sm text-green-700 dark:text-green-300">Total Files</div>
                          </div>
                          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-4 border border-purple-200 dark:border-purple-700">
                            <div className="text-2xl font-bold text-purple-600">{projectAnalysis.pageFiles.length}</div>
                            <div className="text-sm text-purple-700 dark:text-purple-300">Pages Found</div>
                          </div>
                          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-4 border border-orange-200 dark:border-orange-700">
                            <div className="text-2xl font-bold text-orange-600">
                              {projectAnalysis.pageFiles.filter((f) => f.needsSEO).length}
                            </div>
                            <div className="text-sm text-orange-700 dark:text-orange-300">Need SEO</div>
                          </div>
                          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-xl p-4 border border-yellow-200 dark:border-yellow-700">
                            <div className="text-2xl font-bold text-yellow-600">{projectAnalysis.seoReadiness}%</div>
                            <div className="text-sm text-yellow-700 dark:text-yellow-300">SEO Ready</div>
                          </div>
                        </div>
                      </div>

                      {/* Pages Analysis with SEO Code */}
                      <Card className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 border-gray-200 dark:border-gray-700">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <FileText className="w-6 h-6 text-blue-600" />
                            Pages & SEO Code
                            <Badge variant="outline" className="ml-auto">
                              <Copy className="w-4 h-4 mr-1" />
                              Copy-Paste Ready
                            </Badge>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {projectAnalysis.pageFiles.map((file, index) => (
                              <div
                                key={index}
                                className={`rounded-lg border-l-4 overflow-hidden ${
                                  file.needsSEO
                                    ? "bg-green-50 dark:bg-green-900/20 border-green-500"
                                    : "bg-gray-50 dark:bg-gray-800 border-gray-400"
                                }`}
                              >
                                <div className="p-4">
                                  <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-3">
                                      {getFileTypeIcon(file.type)}
                                      <div>
                                        <h4 className="font-semibold">{file.filename}</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">
                                          {file.type.toUpperCase()} • {(file.size / 1024).toFixed(1)} KB •{" "}
                                          {file.isPage ? "Page" : "Component"}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Badge variant={file.needsSEO ? "default" : "secondary"}>
                                        Score: {file.seoScore}
                                      </Badge>
                                      {file.needsSEO && (
                                        <Badge variant="outline" className="text-green-600 border-green-600">
                                          SEO Code Ready
                                        </Badge>
                                      )}
                                      {file.seoCode && (
                                        <Dialog>
                                          <DialogTrigger asChild>
                                            <Button variant="outline" size="sm" className="ml-2 bg-transparent">
                                              <Copy className="w-4 h-4 mr-1" />
                                              Get SEO Code
                                            </Button>
                                          </DialogTrigger>
                                          <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
                                            <DialogHeader>
                                              <DialogTitle className="flex items-center gap-2">
                                                <FileCode className="w-5 h-5" />
                                                SEO Code for: {file.filename}
                                              </DialogTitle>
                                            </DialogHeader>
                                            <div className="flex-1 overflow-hidden">
                                              <Tabs defaultValue="metadata" className="h-full">
                                                <TabsList className="grid w-full grid-cols-3">
                                                  <TabsTrigger value="metadata">
                                                    <Code2 className="w-4 h-4 mr-2" />
                                                    Metadata
                                                  </TabsTrigger>
                                                  <TabsTrigger value="html">HTML Head</TabsTrigger>
                                                  <TabsTrigger value="structured">Structured Data</TabsTrigger>
                                                </TabsList>

                                                <TabsContent value="metadata" className="h-[50vh] mt-4">
                                                  <div className="space-y-2 h-full">
                                                    <div className="flex items-center justify-between">
                                                      <h4 className="font-semibold text-blue-600">
                                                        {file.type === "tsx" || file.type === "jsx"
                                                          ? "Next.js Metadata Export"
                                                          : "HTML Meta Tags"}
                                                      </h4>
                                                      <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() =>
                                                          copyToClipboard(file.seoCode?.metadata || "", "Metadata code")
                                                        }
                                                      >
                                                        <Copy className="w-4 h-4 mr-1" />
                                                        Copy Code
                                                      </Button>
                                                    </div>
                                                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 h-full overflow-auto">
                                                      <pre className="text-sm">
                                                        <code>{file.seoCode?.metadata}</code>
                                                      </pre>
                                                    </div>
                                                  </div>
                                                </TabsContent>

                                                <TabsContent value="html" className="h-[50vh] mt-4">
                                                  <div className="space-y-2 h-full">
                                                    <div className="flex items-center justify-between">
                                                      <h4 className="font-semibold text-green-600">HTML Head Tags</h4>
                                                      <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() =>
                                                          copyToClipboard(
                                                            file.seoCode?.htmlHead || "",
                                                            "HTML head code",
                                                          )
                                                        }
                                                      >
                                                        <Copy className="w-4 h-4 mr-1" />
                                                        Copy Code
                                                      </Button>
                                                    </div>
                                                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 h-full overflow-auto">
                                                      <pre className="text-sm">
                                                        <code>{file.seoCode?.htmlHead}</code>
                                                      </pre>
                                                    </div>
                                                  </div>
                                                </TabsContent>

                                                <TabsContent value="structured" className="h-[50vh] mt-4">
                                                  <div className="space-y-2 h-full">
                                                    <div className="flex items-center justify-between">
                                                      <h4 className="font-semibold text-purple-600">
                                                        JSON-LD Structured Data
                                                      </h4>
                                                      <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() =>
                                                          copyToClipboard(
                                                            file.seoCode?.structuredData || "",
                                                            "Structured data",
                                                          )
                                                        }
                                                      >
                                                        <Copy className="w-4 h-4 mr-1" />
                                                        Copy Code
                                                      </Button>
                                                    </div>
                                                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 h-full overflow-auto">
                                                      <pre className="text-sm">
                                                        <code>{file.seoCode?.structuredData}</code>
                                                      </pre>
                                                    </div>
                                                  </div>
                                                </TabsContent>
                                              </Tabs>
                                            </div>
                                          </DialogContent>
                                        </Dialog>
                                      )}
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => toggleFileExpansion(file.filename)}
                                        className="ml-2"
                                      >
                                        {expandedFiles.has(file.filename) ? (
                                          <ChevronDown className="w-4 h-4" />
                                        ) : (
                                          <ChevronRight className="w-4 h-4" />
                                        )}
                                      </Button>
                                    </div>
                                  </div>

                                  {expandedFiles.has(file.filename) && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.3 }}
                                      className="border-t border-gray-200 dark:border-gray-700 mt-3 pt-3"
                                    >
                                      <div className="grid md:grid-cols-2 gap-4">
                                        {file.issues.length > 0 && (
                                          <div>
                                            <h5 className="font-medium text-sm text-red-600 mb-1">SEO Issues:</h5>
                                            <ul className="text-sm space-y-1">
                                              {file.issues.map((issue, issueIndex) => (
                                                <li key={issueIndex} className="flex items-start gap-2">
                                                  <AlertCircle className="w-3 h-3 text-red-500 mt-0.5 flex-shrink-0" />
                                                  <span className="text-gray-600 dark:text-gray-300">{issue}</span>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        )}
                                        {file.recommendations.length > 0 && (
                                          <div>
                                            <h5 className="font-medium text-sm text-green-600 mb-1">
                                              SEO Recommendations:
                                            </h5>
                                            <ul className="text-sm space-y-1">
                                              {file.recommendations.map((rec, recIndex) => (
                                                <li key={recIndex} className="flex items-start gap-2">
                                                  <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                                  <span className="text-gray-600 dark:text-gray-300">{rec}</span>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        )}
                                      </div>
                                    </motion.div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      {/* Action Buttons */}
                      <div className="text-center space-y-6">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Button onClick={resetTool} variant="outline" size="lg" className="px-8 py-4 bg-transparent">
                            <Sparkles className="w-5 h-5 mr-2" />
                            Analyze Another Project
                          </Button>
                          <Button
                            onClick={() => {
                              const reportText = `SEO Analysis Report for ${projectInfo.businessName}

Project Type: ${projectAnalysis.projectType.toUpperCase()}
Framework: ${projectAnalysis.framework}
Total Files: ${projectAnalysis.totalFiles}
Pages Analyzed: ${projectAnalysis.pageFiles.length}
SEO Readiness: ${projectAnalysis.seoReadiness}%

Pages Needing SEO:
${projectAnalysis.pageFiles
  .filter((f) => f.needsSEO)
  .map((f) => `• ${f.filename} (${f.type.toUpperCase()}) - Score: ${f.seoScore}`)
  .join("\n")}

SEO Code Generated:
${projectAnalysis.pageFiles
  .filter((f) => f.needsSEO)
  .map((f) => `• ${f.filename}: Ready to copy and paste into VS Code`)
  .join("\n")}

This comprehensive SEO analysis was performed by AxoraWeb's AI-powered SEO Code Generator.`
                              navigator.clipboard.writeText(reportText)
                              toast({
                                title: "Report copied! 📋",
                                description: "SEO analysis report copied to clipboard.",
                              })
                            }}
                            variant="outline"
                            size="lg"
                            className="px-8 py-4 bg-transparent"
                          >
                            <FileText className="w-5 h-5 mr-2" />
                            Copy Analysis Report
                          </Button>
                        </div>
                      </div>

                      {/* Contact for Professional Services */}
                      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        <CardContent className="p-8 text-center">
                          <h4 className="text-2xl font-bold mb-4">Need Help Implementing SEO Code?</h4>
                          <p className="text-blue-100 mb-6 text-lg">
                            Our SEO experts can help you implement the generated code and optimize your website for
                            maximum search engine visibility.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                              href={`https://wa.me/923001234567?text=Hi%20AxoraWeb,%20I%20used%20your%20SEO%20Code%20Generator%20for%20${encodeURIComponent(projectInfo.businessName)}%20and%20need%20help%20implementing%20the%20SEO%20code.`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button className="bg-green-600 hover:bg-green-700 text-white">
                                <MessageCircle className="w-5 h-5 mr-2" />
                                WhatsApp SEO Expert
                              </Button>
                            </a>
                            <a
                              href={`mailto:ali@axoraweb.com?subject=SEO Implementation Help for ${projectInfo.businessName}&body=Hi, I used your SEO Code Generator and would like help implementing the SEO code for ${projectInfo.websiteUrl}.`}
                            >
                              <Button
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                              >
                                <Mail className="w-5 h-5 mr-2" />
                                Email SEO Team
                              </Button>
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Powerful{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SEO Code Generator
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to generate copy-paste ready SEO code for your project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="h-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-white/30 hover:shadow-2xl transition-all duration-500 group">
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-3 mb-6 text-white shadow-lg mx-auto group-hover:scale-110 transition-transform duration-300`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 md:p-16 border border-white/20 shadow-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Generate SEO Code?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Upload your project and get ready-to-use SEO code that you can copy and paste directly into your VS Code.
              No technical knowledge required!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                onClick={resetTool}
                size="lg"
                className="px-8 py-4 bg-white text-black hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <FolderOpen className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Start Free SEO Code Generation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a
                href="https://wa.me/923001234567?text=Hi%20AxoraWeb,%20I'm%20interested%20in%20your%20professional%20SEO%20services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Professional Help
                </Button>
              </a>
            </div>
            <div className="flex items-center justify-center gap-8 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>ali@axoraweb.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+92 300 123 4567</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
